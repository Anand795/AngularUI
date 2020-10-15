import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Cart} from 'src/app/bean/Cart';
import {SharedService} from 'src/app/product/shared/shared.service';
import {RestapiService} from 'src/app/restapi.service';
import {WishList} from '../../bean/Wishlist'

@Component({selector: 'app-wishlist', templateUrl: './wishlist.component.html', styleUrls: ['./wishlist.component.css']})
export class WishlistComponent implements OnInit,
AfterViewInit {

    dataSource = new MatTableDataSource<WishList>();
    cart = new Cart();
    uid : string;

    @ViewChild(MatPaginator)paginator : MatPaginator;
    @ViewChild(MatSort)sort : MatSort;

    constructor(private service : RestapiService, private router : Router, private shared : SharedService, private toastr : ToastrService) {}

    ngAfterViewInit(): void { // for sorting
        this.dataSource.sort = this.sort;
        // pagination
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit(): void {
        this.service.getWishlist(sessionStorage.getItem("uid")).subscribe(res => {
            this.dataSource.data = res as WishList[];
            console.log(res);
        })

    }

    displayedColumns : string[] = [
        'productName',
        'brand',
        'desc',
        'price',
        'qty',
        'delete',
        'addToCart'
    ];

    // methed for data filter
    applyFilter(filterValue : String) {
        this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
    }

    public deleteWishPro(id : number) {
        console.log(id);
        this.service.deleteWishlistProduct(id).subscribe(data => {
            this.toastr.success(data.toString());
            window.location.reload();
        })
    }

    public addToCartFromWish(pid : number) {
        console.log(pid)
        this.uid = sessionStorage.getItem("uid");
        this.cart.productId = pid;

        let responce = this.service.addToCartFromWishlist(this.uid, pid);
        responce.subscribe(data => {
            this.toastr.success(data.toString())
            console.log(data)
        })
        window.location.reload();
    }

}

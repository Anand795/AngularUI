import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './bean/Product';
import { Category } from './bean/Category';
import { Address } from './bean/Address';
import { Report } from './bean/Report';
import { CartPro } from './bean/CartPro';


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }

  // user login
  public userLogin(user){
    // const headers = new HttpHeaders({Authorization: 'basic' + btoa( username+":"+password)})
    return this.http.post("http://localhost:8080/user/login" , user);
  }
  
  // user register 
  public userSignUp(user){
    return this.http.post("http://localhost:8080/user/register",user, {responseType: 'text' as 'json'});
  }

  // admin login
  public adminLogin(admin){
    return this.http.post("http://localhost:8080/admin/login" , admin );
  }
   // admin register 
   public adminRegister(admin){
    return this.http.post("http://localhost:8080/admin/register",admin, {responseType: 'text' as 'json'});
  }

  // view Product
  public getProductList(): Observable<Product[]> { 
    return this.http.get<Product[]>("http://localhost:8080/product/getproducts");
  }


  // Add Product 
  public addProduct(catpro){
    return this.http.post("http://localhost:8080/product/addproducts",catpro , {responseType: 'text' as 'json'});
  }
  // to update product --> Get Product by ID
  public getProductById(id:number):Observable<Product>{
    return this.http.get<Product>("http://localhost:8080/product/getproductbyid/"+id);
  }

  // update product
  public updateProduct(product , id){
    return this.http.put("http://localhost:8080/product/updateproducts/"+id , product , {responseType: 'text' as 'json'});
  }

  // delete Product 
  public deleteProduct(id: number){
    return this.http.delete("http://localhost:8080/product/deleteproducts/"+id, {responseType: 'text' as 'json'});
  }

  // GEt category
  public getCategoryList():Observable<Category[]>{ 
    return this.http.get<Category[]>("http://localhost:8080/product/getcategory");
  }

  // Add Category
  public addCategory(category){ 
    return this.http.post("http://localhost:8080/product/addcategory",category, {responseType: 'text' as 'json'});
  }

  // Add to cart with particular user
  public addToCart(uid , pid){ 
    return this.http.post("http://localhost:8080/customer/addtocart/"+uid, pid, {responseType: 'text' as 'json'});
  }
  // Add to cart with particular user
  public addToCartFromWishlist(uid , pid){ 
    return this.http.post("http://localhost:8080/customer/addtocartFromWish/"+uid, pid, {responseType: 'text' as 'json'});
  }

   // Add to Wishlist with particular user
   public addToWishlist(uid , pid){ 
    return this.http.post("http://localhost:8080/customer/addwishlist/"+uid, pid, {responseType: 'text' as 'json'});
  }

  // get cart products based on user
  public getCartList(id){
    return this.http.get("http://localhost:8080/customer/getCartBasedOnUser/"+id);
  }

  // get wishlist based on user 
  public getWishlist(id){
    return this.http.get("http://localhost:8080/customer/getWishlistBasedOnUser/"+id);
  }


  // Get badge Value
  public getBadge(id){
    return this.http.get("http://localhost:8080/customer/getBadge/"+id);
  }


  // to delete product in cart 
  public deleteCartProduct(id){
    return this.http.get("http://localhost:8080/customer/deleteCartProduct/"+id, {responseType: 'text' as 'json'});
  }

  // to delete product in wishlist 
  public deleteWishlistProduct(id){
    return this.http.get("http://localhost:8080/customer/deleteWishlistProduct/"+id, {responseType: 'text' as 'json'});
  }

  // to get addresses
  public getAddress(id){
    return this.http.get("http://localhost:8080/customer/getaddress/"+id);
  }

  // Add new Address
  public addNewAddress(id , address){
    return this.http.post("http://localhost:8080/customer/addAddress/"+id,address , {responseType: 'text' as 'json'});
  }

  // get address by id for update 
  public getAddressById(id):Observable<Address>{
    return this.http.get<Address>("http://localhost:8080/customer/getaddressbyid/"+id)
  }
  // update address
  public updateAddress(address , id){
    return this.http.put("http://localhost:8080/customer/updateAddress/"+id,address, {responseType: 'text' as 'json'})
  }

  // place Order
  public placeOrder(id , addressId){
    console.log(id+"----"+addressId)
    return this.http.get("http://localhost:8080/customer/placeOrder/"+id+"/"+addressId ,{responseType: 'text' as 'json'})
  }

  // customer Report
  public getCustomerReport(id){
    return this.http.get<Report[]>("http://localhost:8080/customer/getcustomerReport/"+id)
  }

  // get Admin Report List
  public getReport(){
    return this.http.get<Report[]>("http://localhost:8080/admin/getReport/")
  }

  // Update Flag
  public updateFlag(id){
    return this.http.get("http://localhost:8080/admin/updateflag/"+id)
  }
  
 
}

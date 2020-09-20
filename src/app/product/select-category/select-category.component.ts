import { Component, OnInit , ViewChild } from '@angular/core';
import { Category } from '../../bean/Category'

import {MatAccordion} from '@angular/material/expansion';
import { RestapiService } from 'src/app/restapi.service';
@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  category:Category;
  cat:Category[];

  constructor(private service:RestapiService) {
    this.category = new Category();
   }

  ngOnInit(): void {

    this.service.getCategoryList().subscribe( data => {
      this.cat = data;
    })

  }
  addCategory(){
    let responce = this.service.addCategory(this.category)
    console.log(this.category.categoryName)
    responce.subscribe(data => 
      console.log(data)  
    )
  }

  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep(){
    this.step++;
  }

}

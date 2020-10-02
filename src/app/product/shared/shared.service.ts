import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id:number;

  cid:number; //for Categpry id in CategoryPro class
  constructor() { }
  setID(data){
    this.id = data;
  }
  getId(){
    return this.id;
  }
  // for category id
  setCID(data){
    this.cid = data;
  }
  getCId(){
    return this.cid;
  }
}

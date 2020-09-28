import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  id:number;
  constructor() { }
  setID(data){
    this.id = data;
  }
  getId(){
    return this.id;
  }
}

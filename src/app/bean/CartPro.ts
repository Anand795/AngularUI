import { Category } from './Category';
import { Product } from './Product'
export class CartPro{
    // pro:Product[];
    // cat:Category[];

    // product variables 
    pid:number;
	productName:String;
	brand:String;
	size:String;
	color:String;
	warranty:String;
	price:String;
	description:String;
	stockLevel:String;
    stockSold:String;
    
    // cart variables 
    cartId:number;
    userId:string;
    product:string;

    // total variable 
    total:number;
}
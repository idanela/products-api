import { Response } from "express";

type product ={
    name:string,
    price:number,
    department:string
}


export interface ResWithProduct extends Response 
{
    product?:product
}

export interface productWithSave extends product 
{
    save:Function
}



export type { product };


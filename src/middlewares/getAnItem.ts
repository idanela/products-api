import { ResWithProduct } from './../types';
import { NextFunction, Request, Response } from "express";
const Product = require('../model/products')


const getAnItem =()=>{
     
return async(req:Request,res:ResWithProduct,next:NextFunction)=>
{
    try {
        const productByID = await Product.findById(req.params.id);

        if(productByID == null)
        {
            return res.status(404).json("product was not found")
        }
        res.product=productByID;
        next();

    } catch (error) {
        res.status(500).json(error)
    }
}
}


module.exports = getAnItem;
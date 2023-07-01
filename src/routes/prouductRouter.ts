import { ResWithProduct } from './../types';
import express, { Request, Response } from 'express'
const router = express.Router();
const Product=require ('../model/products');
//const Product = require('../model/products');
const getAnItem = require('../middlewares/getAnItem')
import type{product, productWithSave } from '../types'


//get multi
router.get('/',async (req:Request,res:Response)=>
{
    try {
        const allProducts = await Product.find();
        res.json(allProducts)
    } catch (error) {
        res.status(500).json(error) // something is wrong on server side
    }
})
//get one

router.get('/:id',getAnItem(),(req:Request,res:ResWithProduct)=>
{
    res.json(res.product!)
})

router.post('/new',async(req:Request,res:Response)=>
{
    const newProduct = new Product({
        name:req.body.name,
        price:req.body.price,
        department:req.body.department
    })
    try {
        const newProd = await newProduct.save()
        res.status(201).json(newProd) // created successfully
    } catch (error) {
        res.status(400).json(error)
    }
    

})

router.put('/:id',getAnItem(),async(req:Request,res:ResWithProduct)=>
{
      try {
        let product = res.product as productWithSave;
        console.log(req.body.price )
        if(req.body.name   != null)
        {
            product!.name = req.body.name  
        }

        if(req.body.price != null)
        {
            console.log("got here")
            product!.price = req.body.price  
        }

        if(req.body.department != null)
        {
            console.log("got there")

            product!.department = req.body.department  
        }
        console.log("GGFDGS")
        await product.save(); // error but works
        console.log("object")

        res.json(product)
      } catch (error) {
        res.status(400).json({error});
      }
})

router.delete('/:id',getAnItem(),async(req:Request,res:ResWithProduct)=>
{
    try {
        let name =res.product!.name;
        await Product.deleteOne(res.product!)
        res.json(`product  ${name}  was deleted`)

    } catch (error) {
        res.status(500).json({error})
    }
})




module.exports = router
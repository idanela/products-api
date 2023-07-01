import express from 'express';
import mongoose from 'mongoose';
const  productRouter = require ('./routes/prouductRouter')
const app = express();
app.use(express.json()) // check if nessecery
app.use('/products',productRouter);


mongoose.connect('mongodb://127.0.0.1:27017/products').then(()=>console.log("connected to DB")).catch(console.error);
app.listen(5000,()=>
{
    console.log("listening")
})
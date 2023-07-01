
import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },
    price:
    {
        type:Number,
        required:true
    },
    department:
    {
        type:String,
        require:true
    }
})

module.exports = mongoose.model('products',productSchema); //(name of model in DB, correspondant schema)
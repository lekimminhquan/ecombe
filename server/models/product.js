import mongoose from "mongoose";

const Product = new mongoose.Schema(
    {
        productname:{type:String},
        decription:{type:String},
        price:{type:Number},
        image:{type:String},
        categoryId:{type:Number},
        brand:{type:String}
    }
)

const item = mongoose.model('Product',Product,'product')

export default item
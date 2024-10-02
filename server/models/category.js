import mongoose from "mongoose";

const Category = new mongoose.Schema(
    {
    categoryName:{type:String},
    categoryid:{type:Number}
},
)

const Catego =  mongoose.model('Categorys',Category,'category')

export default Catego
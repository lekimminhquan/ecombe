import mongoose from "mongoose";

const shipProduct = new mongoose.Schema(
    {
        deliveryCode:{type:Number},
        NameProduct:{type:String},
        price:{type:Number},
        phoneNumber:{type:String},
    }
)

const item = mongoose.model('shipProduct',shipProduct,'Hanggiao')

export default item
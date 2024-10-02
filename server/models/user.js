import mongoose, { model, Types } from "mongoose";

const User = new mongoose.Schema(
    {
    username:{type:String},
    password:{type:String},
    email:{type:String},
    },
)
const logins = mongoose.model('UserLogin', User,'user')

export default logins
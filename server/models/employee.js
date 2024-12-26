import mongoose from "mongoose";

const Employee = new mongoose.Schema(
    {
        maNhanVien :{type: String},
        ho:{type:String},
        ten :{type:String},
        email:{type:String},
        sdt:{type:Number},
        mk:{type:String},
        ngayVaoLam:{type:Date},
        chucVu :{type: String},
        luong :{type: Number},
        thuong :{type: Number}
},
)

const Catego =  mongoose.model('Employee',Employee,'Nhanvien')

export default Catego
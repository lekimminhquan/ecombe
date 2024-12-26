import mongoose from "mongoose";

const Order = new mongoose.Schema(
    {
        maDonHang :{type: String},
        maNguoiDung:{type:String},
        diaChiGiaoHang :{type:String},
        trangThai:{type:String},
        phuongThucThanhToan:{type:String},
        ngayDat:{type:Date},
        trangThaiThanhToan :{type: String},
        tongTien :{type: Number},
        phiVanChuyen :{type: Number}
},
)

const Catego =  mongoose.model('Order',Order,'DonHang')

export default Catego
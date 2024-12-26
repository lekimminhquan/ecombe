import mongoose from "mongoose";

const chiTietDonHangSchema = new mongoose.Schema({
    maChiTietDonHang: { type: String, required: true },
    maDonHang: { type: String, required: true },
    maSanPham: { type: String, required: true },
    maNhanVienPhuTrach: { type: String, required: true },
    maDonGiao: { type: String, required: true },
    soLuong: { type: Number, required: true },
    donGia: { type: Number, required: true },
    tongTien: { type: Number, required: true }
});

export default mongoose.model('ChiTietDonHang', chiTietDonHangSchema);
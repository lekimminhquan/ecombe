import express from 'express'
import ChiTietDonHang from '../models/ChiTietDonHang.js'

const router = express.Router()

router.get('/',async(req,res)=>{
    try {   
        const order = await ChiTietDonHang.find()
        return res.json(order)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req,res)=>{
    const {maChiTietDonHang,maDonHang,maSanPham,maNhanVienPhuTrach,maDonGiao,soLuong,donGia,tongTien} = req.body
    const newCat = new ChiTietDonHang({
        maChiTietDonHang:maChiTietDonHang,
        maDonHang:maDonHang,
        maSanPham:maSanPham,
        maNhanVienPhuTrach:maNhanVienPhuTrach,
        maDonGiao:maDonGiao,
        soLuong:soLuong,
        donGia:donGia,
        tongTien:tongTien
    })
    try {
        const checkCat = await ChiTietDonHang.findOne({categoryName})
        if(checkCat == null){
            newCat.save()
            res.send({message:`Đã thêm vào chi tiết đơn hàng`})
        }
        else {
            res.send({message:'Đơn hàng đã tồn tại'})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default router
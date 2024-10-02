import express from 'express'
import Product from '../models/product.js'

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const product = await Product.find()
        return res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/',async (req,res)=>{
    const {productname,decription,price,category} = req.body
    const newProduct = new Product({
        productname:req.body.productname,
        decription:req.body.decription,
        price:req.body.price,
        category:req.body.category,
    })
    try {
        const checkProduct = await Product.findOne({productname})
        if(checkProduct == null){
            newProduct.save()
            res.send({message:'Đã thêm vào sản phẩm'})
        }
        else {
            res.send({message:'Tên sản phẩm đã tồn tại'})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.delete('/:id',async (req,res)=>{
    const {id} = req.params
    let delproduct
    try {
        delproduct = await Product.findByIdAndDelete(id)
        res.send('Đã xóa thành công')
    } catch (error) {
        return res.json({message:error.message})
    }
})

// sửa giá theo id
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const {price} = req.body
    var fixproduct
    try {
        fixproduct = await Product.findById(id)
        fixproduct.price = price
        fixproduct.save()
        if(fixproduct != null){
            res.send(fixproduct)
        }
    } catch (error) {
        return res.json({message:error.message})
    }
})



async function getProduct(req, res, next) {
    try {
        var product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(400).json('cant not find')
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.product = product
    next()
}

export default router



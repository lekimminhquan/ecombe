import express from 'express'
import Categorys from '../models/category.js'

const router = express.Router()

router.get('/',async(req,res)=>{
    try {
        const catego = await Categorys.find()
        return res.json(catego)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req,res)=>{
    const {categoryName,categoryid} = req.body
    const newCat = new Categorys({
        categoryName:categoryName,
        categoryid:categoryid
    })
    try {
        const checkCat = await Categorys.findOne({categoryName})
        if(checkCat == null){
            newCat.save()
            res.send({message:`Đã thêm vào danh mục`})
        }
        else {
            res.send({message:'Danh mục đã tồn tại'})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default router
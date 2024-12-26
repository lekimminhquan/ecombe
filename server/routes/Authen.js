import express from 'express';
import logins from '../models/user.js'
import dotenv from'dotenv'
dotenv.config()

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await logins.findOne({ username })
        if (!user) {
            return res.json({ message: "Tài khoản không tồn tại!" })
        }
        else {
            if (user.password == password) {
                return res.send({ Token: process.env.COFIRM_LOGIN  , user })
            }
            else {
                return res.json({ message: "Sai mật khẩu!" })
            }
        }
    } catch (error) {
        res.send(false)

    }

})

export default router
import express from 'express';
import Users from '../models/user.js'
import 'dotenv/config'


const router = express.Router()
router.get('/', async (req, res) => {
    try {
        const user = await Users.find()
        res.json(user)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// them user
router.post('/', async (req, res) => {
    const { username, password,email } = req.body
    const newuser = new Users({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
    try {
        const user = await Users.findOne({ username })
        const useremail = await Users.findOne({email})
        if (user != null) {
           res.send('0')
        }
        else {
            if (useremail != null) {
                   res.send('1')
            }
            else{
                newuser.save()
                 res.send('2')
            }
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})


router.get('/:id', getUser, (req, res) => {
    res.send(res.user)
});


router.delete('/:id', async (req, res) => {
    let user
    try {
        user = await Users.findByIdAndDelete(req.params.id)
        return res.status(200).json('Đã xóa thành công')

    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


// sửa pass va email 

router.put('/:id', getUser, async (req, res) => {
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    try {
        const updateuser = await res.user.save()
        res.json(updateuser)
    } catch (error) {
        res.status(500).json({ message: err.message })
    }
})

// tìm user
async function getUser(req, res, next) {
    let user
    try {
        user = await Users.findById(req.params.id)
        if (user == null) {
            return res.status(400).json('cant not find')
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
    res.user = user
    next()
}


export default router
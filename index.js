import express from 'express'
import mogoose from 'mongoose'
import dotenv from 'dotenv'
import mainRoute from './server/routes/user.js'
import Authenroute from './server/routes/Authen.js'
import showproduct from './server/routes/product.js'
import Category from './server/routes/category.js'
import cors from 'cors'
dotenv.config()

mogoose.connect(process.env.MONGO_URI)
const app = express()
const db = mogoose.connection
db.on('error', (error) => { console.log('error') })
db.once('open', () => { console.log('Database is connected') })


app.use(cors());
app.use(express.json())
const port = 8000

//tạo api 
app.use('/user', mainRoute);
app.use('/authen', Authenroute);
app.use('/product',showproduct)
app.use('/category',Category)

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:'Wellcome to MQLK'
//     })
// })

app.listen(port, () => {
    console.log(`Server Saleweb running port ${port}...`)
})
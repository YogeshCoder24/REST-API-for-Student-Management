const express=require('express')
const mongoose=require('mongoose')
const MONGODB_URI='mongodb+srv://YogeshCoder:YogeshCoder2409@cluster0.qhqrwbh.mongodb.net/studentDB'
const url=MONGODB_URI;

const app=express()

mongoose.connect(url, {
    useNewUrlParser:true
});
const con = mongoose.connection

con.on('open', () =>{
    console.log('connected......')
})

app.use(express.json())

const studentRouter=require('./Routers/student')
app.use('/student',studentRouter)

const port=process.env.PORT  || 9000;
app.listen(port, ()=>{
    console.log(`server connected port ${port}`)
})

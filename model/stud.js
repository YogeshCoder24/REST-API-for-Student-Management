const { Double } = require('mongodb')
const mongoose=require('mongoose')


const studSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    register_no:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    CGPA:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('stud',studSchema)
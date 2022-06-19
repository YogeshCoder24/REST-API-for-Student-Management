const express=require('express')
const stud = require('../model/stud')
const router=express.Router()
//const stud=require('../model/stud')

router.get('/', async(req,res)=>{
    try{
        const students=await stud.find()
        res.json(students)

    }
    catch(err){
        res.send(err)
    }
   // res.send('get request')
})

router.get('/:id', async(req,res)=>{
    try{
        const stuGet=await stud.findById(req.params.id)
        res.json(stuGet)

    }
    catch(err){
        res.send(err)
    }
   // res.send('get request')
})

router.delete('/:id', async(req,res)=>{
    try{
        const stuGet=await stud.findById(req.params.id)
       
        const a1=await stuGet.remove()
        const name=stuGet.name
        res.send(`Student ${name} is deleted`)

    }
    catch(err){
        res.send(err)
    }
   // res.send('get request')
})


router.patch('/:id', async(req,res)=>{
    try{
        const stuPatch=await stud.findById(req.params.id)
        if(req.body.name){
            stuPatch.name=req.body.name;
        }
       
        if(req.body.register_no){
            stuPatch.register_no=req.body.register_no
        }
       
        if(req.body.CGPA){
            stuPatch.CGPA=req.body.CGPA
        }
       
        if(req.body.department){
            stuPatch.department=req.body.department
        }
       
        if(req.body.year){
            stuPatch.year=req.body.year
        }
       
        if(req.body.mail){
            stuPatch.mail=req.body.mail
        }
       
        if(req.body.phone){
            stuPatch.phone=req.body.phone
        }
        
        if(req.body.dob){
            stuPatch.dob=req.body.dob
        }
       
        const a1=await stuPatch.save()
        res.json(a1)
    }
    catch(err){
res.send(err)
    }
})


router.post('/', async(req,res)=>{
    const student1=new stud({
        name:req.body.name,
        register_no:req.body.register_no,
        dob:req.body.dob,
        year:req.body.year,
        department:req.body.department,
        CGPA:req.body.CGPA,
        mail:req.body.mail,
         phone:req.body.phone
    })
    try{
 const s1=await student1.save()
 res.json(s1)
    }
    catch(err){
     res.send(err)
    }
})

module.exports=router
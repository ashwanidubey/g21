const mongoose=require("mongoose")
const {User}=require("../model/User")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
let signature="ashwani"
const login=async (req,res)=>{
   const {email,password}=req.body
   let users=await User.find({email})
   if(users.length==0){
      return res.send("either email or password is wrong") 
   }
   let hashpassword=users[0].password
   let response=await bcrypt.compare(password,hashpassword)
   if(response==false){
      return res.send("either email or password is wrong") 
   }
   let data={id:users[0].id}
   let token=jwt.sign(data,signature)
   return res.send({token,sucess:true}) 
  

 }
 const logout=(req,res)=>{
    res.send("logout")
 }
 const signup=async (req,res)=>{
    const {name,email,password,cpassword}=req.body
    let salt=await bcrypt.genSalt();
    let haspassword=await bcrypt.hash(password,salt);
   let user=new User({name,email,password:haspassword})

    user.save();
    let data={id:user.id}
    let token=jwt.sign(data,signature)
    return res.send({token,sucess:true}) 
    
 }

 const forgatepassword=(req,res)=>{
    res.send("forgate password")
 }

 module.exports={login,logout,signup,forgatepassword}
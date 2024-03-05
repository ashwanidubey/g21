const express=require("express")
const authentication=express.Router();
const {login,logout,signup,forgatepassword}
        =require("../function/authentication")
const {isEmailExist}=require("../middleware/isEmailExist")        
const {checkcreds}=require("../middleware/checkcreds")
authentication.post('/login',login)
authentication.get('/logout',logout)
authentication.post('/signup',checkcreds,isEmailExist,signup)
authentication.get('/forgatepassword',forgatepassword)



module.exports={authentication}



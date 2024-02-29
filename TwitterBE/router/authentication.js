const express=require("express")
const authentication=express.Router();
const {login,logout,signup,forgatepassword}
        =require("../function/authentication")
const {checkcreds}=require("../middleware/checkcreds")
authentication.get('/login',login)
authentication.get('/logout',logout)
authentication.post('/signup',checkcreds,signup)
authentication.get('/forgatepassword',forgatepassword)



module.exports={authentication}



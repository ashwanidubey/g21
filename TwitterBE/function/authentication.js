const login=(req,res)=>{
    res.send("hello login")
 }
 const logout=(req,res)=>{
    res.send("logout")
 }
 const signup=(req,res)=>{
    //console.log(req.body);
    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    const cpassword=req.body.cpassword

    res.send("signup successfull")
 }
 const forgatepassword=(req,res)=>{
    res.send("forgate password")
 }

 module.exports={login,logout,signup,forgatepassword}
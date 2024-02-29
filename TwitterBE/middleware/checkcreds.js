const checkcreds=(req,res,next)=>{
   const {name,email,password,cpassword}=req.body
    if(password!==cpassword)
      return res.send("password not matching")
    if(password.length<4)
      return res.send("password must be atleast 4 digit")
    if(name.length<1)
      return res.send("name must be atleast 4 digit")
    if(!email.includes("@"))
      return res.send("email must conatains @")
    next();
}

module.exports={checkcreds}
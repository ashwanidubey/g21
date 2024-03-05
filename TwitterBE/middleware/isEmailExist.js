const {User}=require("../model/User")
 

const isEmailExist=async (req,res,next)=>{
    const {name,email,password,cpassword}=req.body
    const users=await User.find({email})
    if(users.length>0){
        return res.send("email already exist")
    }
    next();
}

module.exports={isEmailExist}
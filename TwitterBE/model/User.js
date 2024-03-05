const mongoose=require("mongoose")
const userschema={ 
                   name: String ,
                   email: String,
                   password: String
                }

const User = mongoose.model('User', userschema );

module.exports={User}
 
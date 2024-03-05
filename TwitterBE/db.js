//connect to mongo
const mongoose = require('mongoose');
require("dotenv").config();
let mongouri= process.env.MONGO
const connectToMongo=()=>{
    mongoose.connect(mongouri)
    .then(()=>{
       console.log("connection to mongodb succesfull")
    })
    .catch(()=>{
       console.log("connection to mongodb failed"+mongouri)
    });
}   
 module.exports={connectToMongo}     
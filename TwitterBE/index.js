const express=require("express")
const {router}=require("./router/router")
const app=express()
require("dotenv").config();
const {connectToMongo}= require("./db")
connectToMongo();
app.use(express.json())
app.use(router);
const port=process.env.PORT
app.listen(port,()=>{
    console.log("app started"+port)
})


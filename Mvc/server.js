
const express=require("express")
const app=express()
const db=require("./config/db")
const U_router = require("./Routes/userRoutes")
app.use(express.json())

app.use("/user",U_router)

app.listen(3005,()=>{
    console.log("server listen")
})


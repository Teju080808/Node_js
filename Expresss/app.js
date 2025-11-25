

const express=require("express")

const app=express()

app.set("view engine","ejs")
app.use(express.static(__dirname+"/Public"))

app.get("/index",(req,res)=>{
    res.render("index")
})

app.listen(3001,()=>{
    console.log("server listen")
})
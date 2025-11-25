
const express=require("express")
const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded())

var student=[
  {
    id:1,
    name:"tejal"
  },
  {
    id:2,
    name:"teju"
  }
]

const middleware=((req,res,next)=>{
  if(req.query.age >=18){
    next()
  }
})

app.get("/contact",middleware,(req,res)=>{
  res.render("contact")
})

app.get("/",(req,res)=>{
  res.render("home",{student})
})

app.post("/insertData",(req,res)=>{
  const {id,name}=req.body
  const obj={id:student.length+1,name}
  student.push(obj)
  res.redirect("/")
})

app.get("/delete",(req,res)=>{
  const id=req.query.id
  const ans=student.filter(e => e.id != id)
  student=ans
  res.redirect("/")
})

app.get("/edit",(req,res)=>{
  const id=req.query.id
  const ans=student.find(e => e.id == id)
  res.render("edit",{ans})
})

app.post("/editData",(req,res)=>{
  const {id,name}=req.body
  student.forEach(e=>{
    if(e.id == id){
      e.name=name
    }
  })

  res.redirect("/")
})

app.use(middleware)

app.listen(3005,()=>{
  console.log("server listen")
})
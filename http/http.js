const http=require("http")

// http.createServer((req,res)=>{
//    res.write("hello")
//    res.end()
// }).listen(5000)

http.createServer((req,res)=>{
  const path=req.url
  const method=req.method
  console.log(path,method)

  if(path.includes("/bts") && method=="GET"){
    res.write("Home page")
    res.end()
  }
  else{
    res.write("Contact page")
    res.end()
  }
}).listen(5000)
const user = require("../userModel/userModel")

const Register=async(req,res)=>{
    const data=await user.create(req.body)
    res.send(data)
}

const RegisterGet=async(req,res)=>{
    const data=await user.find({})
    res.send(data)
}
const RegisterDelete=async(req,res)=>{
    const id=req.params.id
    const data=await user.findByIdAndDelete(id)
    res.send("success")
}

const RegisterEdit=async(req,res)=>{
    const id=req.params.id
    const data=await user.findByIdAndUpdate(id,req.body)
    res.send(data)
}

module.exports={
    Register,RegisterGet,RegisterDelete,RegisterEdit
}
// module.exports=Register
// module.exports=RegisterGet
// module.exports=RegisterDelete
// module.exports=RegisterEdit
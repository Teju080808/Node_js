
const mongoose=require("mongoose")

const userModel=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },image:{
        type:[String],
    }
})

const user=mongoose.model("tejal08",userModel)
module.exports=user
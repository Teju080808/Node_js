const express=require("express")
const {Register,RegisterGet,RegisterDelete,RegisterEdit} = require("../Controller/UserController")
const U_router=express.Router()

U_router.post("/register",Register)
U_router.get("/",RegisterGet)
U_router.delete("/:id",RegisterDelete)
U_router.patch("/:id",RegisterEdit)

module.exports=U_router
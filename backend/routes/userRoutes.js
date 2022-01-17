const express=require("express")
const router=express.Router()
const {registerUser, authUser, adddescrip}=require("../controllers/userController")


router.route("/").post(registerUser)
router.route("/login").post(authUser)
router.route("/adddescrip").post(adddescrip)
module.exports=router
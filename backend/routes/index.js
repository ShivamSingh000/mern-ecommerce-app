const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require("../controller/user/userSignIn")
const userDetailController = require('../controller/user/userDetail')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProducController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProductOne = require('../controller/product/getCategoryProductOne')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailController)
router.get("/userLogout",userLogout)

// admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user", authToken,updateUser)

// product
router.post("/upload-product" ,authToken,UploadProducController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-categoryProductOne",getCategoryProductOne)


 
module.exports = router
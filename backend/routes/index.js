const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/userSignUp")
const userSignInController = require("../controller/userSignIn")
const userDetailController = require('../controller/userDetail')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailController)
router.get("/userLogout",userLogout)

module.exports = router
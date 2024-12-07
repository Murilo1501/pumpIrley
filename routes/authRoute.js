const {Router} = require("express");
const AuthController = require("./../controller/authController")

const router = Router();


router.post("/auth", AuthController.auth)


module.exports = router
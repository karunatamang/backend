const express = require("express");
const router = express.Router();
const Users = require('../models/User')
const auth = require('../middleware/auth');
const UserController = require('../controller/user_controller')



router.post("/register",UserController.adduser)
router.post("/login", UserController.login)
router.put("/update/:id", UserController.updateUser)
router.get("/userdetail/:id", UserController.userdetail)
router.delete("/delate/:id", UserController.deleteUser)

module.exports = router
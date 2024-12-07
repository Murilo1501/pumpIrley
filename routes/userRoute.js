const {Router} = require("express");
const UserController = require("./../controller/userController")
const authenticated = require("./..//middleware/authenticated")

const router = Router();
router.use(authenticated)

router.get("/users",UserController.read)
router.post("/users",UserController.create)
router.delete("/users/:id",UserController.delete)
router.put("/users/:id",UserController.update)

module.exports = router

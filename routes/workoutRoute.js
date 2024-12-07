const {Router} = require("express");
const WorkoutController = require("./../controller/workoutController")

const router = Router();

router.get("/workout",WorkoutController.read)
router.post("/workout",WorkoutController.create)
router.delete("/workout/:id",WorkoutController.delete)
router.put("/workout/:id",WorkoutController.update)

module.exports = router

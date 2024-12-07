const user = require("./userRoute")
const workout = require("./workoutRoute")
const auth = require("./authRoute")
const bodyParser = require("body-parser")

module.exports = app =>{
    
    app.use(bodyParser.json())
    app.use(auth)
    app.use(user)
    app.use(workout)
   
    

}

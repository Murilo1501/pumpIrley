const express = require('express')
const routes = require("./routes")
const PORT = 3000
const app = express();
routes(app)






app.listen(PORT,()=> {
    console.log ("servidor rodando em http://localhost:"+PORT)
})


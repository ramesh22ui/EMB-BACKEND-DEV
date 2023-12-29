const express = require("express")
const dotEnv = require("dotenv")
const mongoose = require('mongoose')
const bodyParse  = require("body-parser")
const app = express();
const employeeRouter = require("./routes/employeeRouter") 

const PORT = process.env.PORT || 5000
dotEnv.config()

mongoose.connect(process.env.MONGO_BACKEND_URL)
.then(()=>{
    console.log("MongoDB Connected Successfully!")
})
.catch((error)=>{
    console.log(`${error}`)
})


app.use("/employee", employeeRouter)
app.use(bodyParse.json())

app.listen(PORT, ()=>{

    console.log(`Server Started and running at ${PORT}`)
})

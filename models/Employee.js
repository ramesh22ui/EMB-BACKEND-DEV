const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        default:false
    },
    address:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model("Employee", employeeSchema)
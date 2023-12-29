
const Employee = require("../models/Employee")

const createEmployee = async (req, res)=>{
    try {
        const {name, email, phone, address} = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            address
        })
       await  employee.save()
        res.status(201).json(employee)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}

module.exports = {
    createEmployee
}
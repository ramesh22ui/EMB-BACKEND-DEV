const express = require("express")
const router = express.Router()

const Employee = require('../models/Employee')
const employeeController = require('../controllers/employeeController')

router.post("/add-emp", employeeController.createEmployee)

module.exports = router
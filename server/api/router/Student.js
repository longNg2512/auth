import express from 'express'
import verifyToken from '../middleware/auth.js'
import * as StudentController from '../controller/Student.js'

const StudentRouter = express.Router()

// @router POST api/student
// @desc Create student
// @access Private
StudentRouter.post('/', verifyToken, StudentController.addStudent)

// @router GET api/student
// @desc Read student
// @access Private
StudentRouter.get('/', verifyToken, StudentController.getStudent)

// @router PUT api/student
// @desc Update student
// @access Private
StudentRouter.put('/:id', verifyToken, StudentController.updateStudent)

// @router DELETE api/student
// @desc Delete student
// @access Private
StudentRouter.delete('/:id', verifyToken, StudentController.deleteStudent)

export default StudentRouter

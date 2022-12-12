import express from 'express'
import * as UserController from '../controller/User.js'

const UserRouter = express.Router()

// @route POST /api/auth/register
// @desc Register user
// @access Public
UserRouter.post('/register', UserController.registerUser)

// @route POST /api/auth/login
// @desc Login user
// @access Public
UserRouter.post('/login', UserController.loginUser)

export default UserRouter

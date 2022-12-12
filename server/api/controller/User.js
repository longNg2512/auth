import UserModel from '../model/User.js'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'

// @route POST /api/auth/register
// @desc Register user
// @access Public
export const registerUser = async (req, res) => {
    const { username, password } = req.body

    // Simple validation
    if (!username || !password)
        return res.status(400).json({
            success: false,
            message: 'Missing username or password !!!'
        })

    try {
        // Check for existing user
        const user = await UserModel.findOne({ username })

        if (user)
            return res
                .status(400)
                .json({ success: false, message: 'Username already take !!!' })

        // All good
        const hashedPassword = await argon2.hash(password)
        const newUser = new UserModel({ username, password: hashedPassword })
        await newUser.save()

        // Return token
        const accessToken = jwt.sign(
            { userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.status(201).json({
            success: true,
            message: 'Register Successfully !!!',
            username: newUser.username,
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @route POST /api/auth/login
// @desc Login user
// @access Public
export const loginUser = async (req, res) => {
    const { username, password } = req.body

    // Simple validation
    if (!username || !password)
        return res.status(400).json({
            success: false,
            message: 'Missing username or password !!!'
        })

    try {
        // Check existing user
        const user = await UserModel.findOne({ username })
        if (!user)
            return res.status(400).json({
                success: false,
                message: 'Incorrect username or password !!!'
            })

        // username found
        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({
                success: false,
                message: 'Incorrect username or password !!!'
            })

        // All good
        // Return token
        const accessToken = jwt.sign(
            { userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.status(201).json({
            success: true,
            message: 'Logged in Successfully !!!',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

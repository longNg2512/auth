import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import * as router from './api/router/index.js'

const app = express()

dotenv.config()
const PORT = process.env.PORT
const URI = process.env.DATABASE_URL

app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', router.UserRouter)
app.use('/api/student', router.StudentRouter)

mongoose
    .set('strictQuery', true)
    .connect(URI)
    .then(() => {
        console.log('Connected to DB !!!')
        app.listen(PORT, () => {
            console.log(`Server started on PORT ${PORT}`)
        })
    })
    .catch(error => {
        console.log(error)
        console.log('Internal Server Error !!!')
    })

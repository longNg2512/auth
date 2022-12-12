import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        gender: {
            type: String,
            enum: ['Nam', 'Nữ', 'Đồng Tính']
        },
        url: {
            type: String
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true }
)

const StudentModel = mongoose.model('students', StudentSchema)
export default StudentModel

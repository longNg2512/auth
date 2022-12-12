import StudentModel from '../model/Student.js'

// @router POST api/student
// @desc Create student
// @access Private
export const addStudent = async (req, res) => {
    const { name, gender, url } = req.body

    // Simple validation
    if (!name)
        return res
            .status(400)
            .json({ success: false, message: 'Name is required !!!' })

    try {
        const newStudent = new StudentModel({
            name,
            gender,
            url: url.startsWith('https://') ? url : `https://${url}`,
            user: req.userId
        })

        await newStudent.save()

        res.json({
            success: true,
            message: 'Create student successfully !!!',
            student: newStudent
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @router GET api/student
// @desc Read student
// @access Private
export const getStudent = async (req, res) => {
    try {
        const listStudent = await StudentModel.find({
            user: req.userId
        }).populate('user', ['username'])
        res.json({ success: true, listStudent })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @router PUT api/student
// @desc Update student
// @access Private
export const updateStudent = async (req, res) => {
    const { name, gender, url } = req.body

    // Simple validation
    if (!name)
        return res
            .status(400)
            .json({ success: false, message: 'Name is required !!!' })

    try {
        let updatedStudent = {
            name,
            gender,
            url:
                url !== ''
                    ? url.startsWith('https://')
                        ? url
                        : `https://${url}`
                    : ''
        }

        const updateStudentCondition = { _id: req.params.id, user: req.userId }

        updatedStudent = await StudentModel.findOneAndUpdate(
            updateStudentCondition,
            updatedStudent,
            { new: true }
        )

        // User not authorize to update student or student not found
        if (!updatedStudent)
            return res.status(401).json({
                success: false,
                message:
                    'User not authorize to update student or student not found !!!'
            })

        res.json({
            success: true,
            message: 'Updated student successfully !!!',
            listStudent: updatedStudent
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

// @router DELETE api/student
// @desc Delete student
// @access Private
export const deleteStudent = async (req, res) => {
    try {
        const deleteStudentCondition = { _id: req.params.id, user: req.userId }
        const deletedStudent = await StudentModel.findOneAndDelete(
            deleteStudentCondition
        )

        // User not authorize to delete student or student not found
        if (!deletedStudent)
            return res.status(401).json({
                success: false,
                message:
                    'User not authorize to delete student or student not found !!!'
            })
        res.json({ success: true, message: 'Deleted student successfully !!!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error !!!'
        })
    }
}

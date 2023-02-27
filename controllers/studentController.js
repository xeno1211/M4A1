const Student = require('../models/studentModel')
exports.getData = async (req, res) => {
    const students = await Student.find()
    res.status(200).json({
        status: "success",
        results: students.length,
        data: {
            students
        }
    })
}
exports.getDataByID = async (req, res) => {
    const {id} = req.params
    const students = await Student.find({_id: id})
    res.status(200).json({
        status: "success",
        results: students.length,
        data: {
            students
        }
    })
}
exports.postData = async (req, res) => {
    const newStudent = req.body
    const student = await Student.create(newStudent)
    //const student = new Student(newStudent)
    //student.save()
    

    res.status(201).json({
        status: "success",
        data: student
    })
}
exports.updateDataByID = (req, res) =>{ 
    res.send('PUT')
}
exports.patchDataByID = (req, res) =>{ 
    res.send('PATCH')
}
exports.deleteDataByID = (req, res) =>{
     res.send('DELETE')
}

//module.exports = controller
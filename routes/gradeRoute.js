//Routes
const express = require('express')
const router = express.Router()
const gradeController = require('../controllers/gradeController')

router.route('/')
    .get (gradeController.getData)
    .post(gradeController.postData)
    

router.route('/:id')
    .get (gradeController.getData)
    .patch(gradeController.postData)
    .put(gradeController.putData)
    .delete(gradeController.deleteData)

module.exports = router

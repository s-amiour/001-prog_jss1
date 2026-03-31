import express from "express"
import * as studentsController from "../controllers/studentsController.js"

// Router instance
const router = express.Router()

// The base path, /books, will be defined in index.js

router.get('/', studentsController.getAllStudents)
router.get('/:id', studentsController.findStudentById)
router.post('/', studentsController.createStudent)
router.put('/:id', studentsController.updateStudent)
router.delete('/:id', studentsController.deleteStudent)

export default router;

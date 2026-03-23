import express from "express"
import * as studentController from "../controllers/studentControllers.js"

// Router instance
const router = express.Router()

// The base path, /books, will be defined in index.js

router.get('/', studentController.getAllStudents)
router.get('/:id', studentController.findStudentById)
router.post('/', studentController.createStudent)
router.put('/:id', studentController.updateStudent)
router.delete('/:id', studentController.deleteStudent)

export default router;

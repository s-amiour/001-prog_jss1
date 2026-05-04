import express from "express"
import * as studentController from "../controllers/studentController.js"
import authN from "../middleware/auth-middleware.js"
import { validateStudent } from "../middleware/validateStudent.js"

// Router instance
const studentRouter = express.Router()

studentRouter.use(authN)

studentRouter.get('/', studentController.getAllStudents)
studentRouter.get('/:id', studentController.getStudentById)
studentRouter.post('/', validateStudent, studentController.createStudent)
studentRouter.put('/:id', validateStudent, studentController.updateStudent)
studentRouter.delete('/:id', studentController.deleteStudent)

export default studentRouter;

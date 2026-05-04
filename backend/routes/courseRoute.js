import express from "express";
import * as courseController from "../controllers/courseController.js";
import authN from "../middleware/auth-middleware.js";
import { validateCourse } from "../middleware/validateCourse.js";


const courseRouter = express.Router();

courseRouter.use(authN);

courseRouter.get("/", courseController.getAllCourses);
courseRouter.get("/:id", courseController.getCourseById);
courseRouter.post("/", validateCourse, courseController.createCourse);
courseRouter.put("/:id", validateCourse, courseController.updateCourse);
courseRouter.delete("/:id", courseController.deleteCourse);

export default courseRouter;
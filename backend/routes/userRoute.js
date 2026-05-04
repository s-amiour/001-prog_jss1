import express from "express";
import multerConfig from "../middleware/multer-config.js";

import { validateStudent } from "../middleware/validateStudent.js";
import { loginHandler, registerHandler } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  (req, res, next) => {
    multerConfig(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message });
      next();
    });
  },
  validateStudent,
  registerHandler
);
userRouter.post("/login", loginHandler);

export default userRouter;
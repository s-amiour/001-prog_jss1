import express from "express";
import * as roomController from "../controllers/roomController.js";
import authN from "../middleware/auth-middleware.js";
import { validateRoom } from "../middleware/validateRoom.js";

const roomRouter = express.Router();

roomRouter.use(authN);

roomRouter.get("/", roomController.getAllRooms);
roomRouter.get("/:id", roomController.getRoomById);
roomRouter.post("/", validateRoom, roomController.createRoom);
roomRouter.put("/:id", validateRoom, roomController.updateRoom);
roomRouter.delete("/:id", roomController.deleteRoom);

export default roomRouter;
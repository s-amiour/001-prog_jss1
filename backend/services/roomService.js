import Room from "../models/Room.js";

export const findAllRooms = () => Room.find();

export const findRoomById = (id) => Room.findById(id);

export const createRoomService = (data) => Room.create(data);

export const updateRoomService = (id, data) =>
    Room.findByIdAndUpdate(id, data, { new: true });

export const deleteRoomService = (id) => Room.findByIdAndDelete(id);

import { Router } from "express";
import upload from "../middlewares/multer.js";
import { uploadImage } from "../controllers/cloudinary.controller.js";

const routerCloudinary = Router();

routerCloudinary.post("/upload-image", upload.single("image"), uploadImage);

export default routerCloudinary;
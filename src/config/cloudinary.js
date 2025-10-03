import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloudinary_url: process.env.CLOUDINARY_URL
});

export default cloudinary;
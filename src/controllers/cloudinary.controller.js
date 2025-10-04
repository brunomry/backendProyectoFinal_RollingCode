import streamifier from "streamifier";
import cloudinary from "../config/cloudinary.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

const streamUpload = (req) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "app-restaurante", transformation: [{ width: 800, height: 600, crop: "fill" }, { fetch_format: "auto", quality: "auto" }] },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
};

export const uploadImage = async (req, res) => {
  try {
    const result = await streamUpload(req);
    res.json(formatoRespuesta(true, "Imagen guardada", { url: result.secure_url }, null));
  } catch (error) {
    console.error(error);
    res.status(500).json(formatoRespuesta(false,"Error al subir imagen", null, { code:500, details: error.message }));
  }
};
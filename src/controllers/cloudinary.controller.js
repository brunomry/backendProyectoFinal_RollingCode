import cloudinary from "../config/cloudinary.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const uploadImage = async (req, res) => {
  console.log(req.file);
  
  try {
    if (!req.file) {
      return res.status(400).json(
        formatoRespuesta(false, "No se envió ningún archivo", null, {
          code: 400,
          details: "No se envió ningún archivo",
        })
      );
    }

    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "app-restaurante",
            transformation: [
              { fetch_format: "auto", quality: "auto" },
            ],
          },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        req.file.stream.pipe(stream);
      });
    };

    const result = await streamUpload(req);

    return res.json(
      formatoRespuesta(
        true,
        "Error al subir la imagen",
        result,
        null
      )
    );
  } catch (error) {
    return res.status(500).json(
      formatoRespuesta(false, "Error al subir la imagen", null, {
        code: 400,
        details: "Error al subir la imagen",
      })
    );
  }
};

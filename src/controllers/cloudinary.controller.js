import cloudinary from "../config/cloudinary.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

export const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload_stream(
      {
        folder: "app-restaurante",
        transformation: [
          { width: 800, height: 600, crop: "fill" },
          { fetch_format: "auto", quality: "auto" },
        ],
      },
      (error, result) => {
        if (error)
          return res.status(500).json(
            formatoRespuesta(false, "Error al subir imagen", null, {
              code: 500,
              details: "Error al subir imagen",
            })
          );
        return res.json(
          formatoRespuesta(
            true,
            "Imagen guardada",
            { url: result.secure_url },
            null
          )
        );
      }
    );

    req.file.stream.pipe(result);
  } catch (error) {
    res.status(500).json(
      formatoRespuesta(false, "Error al subir imagen", null, {
        code: 500,
        details: error.message,
      })
    );
  }
};

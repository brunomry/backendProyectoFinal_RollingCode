import jwt from "jsonwebtoken";
import "dotenv/config";
import { config } from "../config/config.js";
import { formatoRespuesta } from "../utils/respuesta.util.js";

const validarJWT = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json(
        formatoRespuesta(false, "Se requiere un token", null, {
          code: 401,
          details: "Falta header Authorization",
        })
      );
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json(
      formatoRespuesta(false, "Token inválido", null, {
        code: 401,
        details: "No se encontró token en Authorization",
      })
    );
  }

  try {
    const payload = jwt.verify(token, config.jwtSecret);
    req.correo = payload.correo;
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error.message);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json(
        formatoRespuesta(false, "Token no válido", null, {
          code: 401,
          details: error.message,
        })
      );
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json(
        formatoRespuesta(false, "Token expirado", null, {
          code: 401,
          details: error.message,
        })
      );
    }

    return res.status(401).json(
      formatoRespuesta(false, "Error en la autenticación", null, {
        code: 401,
        details: error.message,
      })
    );
  }
};

export default validarJWT;

import jwt from 'jsonwebtoken';
import 'dotenv/config';

const validarJWT = (req, res, next) => {
  console.log(req.header);
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      mensaje: "No hay token en la peticion",
    });
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req._id = payload._id;
    req.correo = payload.correo;
    req.rol = payload.rol;
    req.nombreCompleto = payload.nombreCompleto;
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        mensaje: "Token inválido",
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        mensaje: "Token expirado",
      });
    } else {
      return res.status(401).json({
        mensaje: "Error en la autenticación",
      });
    }
  }
};

export default validarJWT;
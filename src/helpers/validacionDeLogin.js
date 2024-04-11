import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionLogin = [
  check("correo")
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isLength({ min: 3, max: 265 })
    .withMessage("El correo debe contener entre 3 y 265 carácteres")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    .withMessage("El correo debe contener un formato válido. Ej: nombre@correo.com"),
  check("clave")
    .notEmpty()
    .withMessage("La clave del usuario es obligatoria")
    .isLength({ min: 8, max: 16 })
    .withMessage("La clave deve contener entre 8 y 16 carácteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "La clave debe tener al menos una letra minúscula y una letra mayúscula"
    ),
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validacionLogin;
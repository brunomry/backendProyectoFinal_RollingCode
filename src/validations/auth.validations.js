import { body } from "express-validator";

const fullnameValidacion = [
  body("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre y apellido es obligatorio")
    .isString()
    .withMessage("El nombre y apellido debe ser un string")
    .isLength({ min: 7, max: 30 })
    .withMessage("El nombre y apellido debe contener entre 7 y 30 carácteres"),
];

const emailValidacion = [
  body("correo")
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isLength({ min: 3, max: 265 })
    .withMessage("El correo debe contener entre 3 y 265 carácteres")
    .isEmail()
    .withMessage(
      "El correo debe contener un formato válido. Ej: nombre@correo.com"
    ),
];

const passwordValidacion = [
  body("clave")
    .notEmpty()
    .withMessage("La clave del usuario es obligatoria")
    .isLength({ min: 8, max: 16 })
    .withMessage("La clave deve contener entre 8 y 16 carácteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "La clave debe tener al menos una letra minúscula y una letra mayúscula"
    ),
];

const rolValidacion = [
    body("rol")
        .notEmpty()
        .withMessage("El rol del usuario es obligatorio")
        .isIn(["Usuario", "Administrador"])
        .withMessage("El rol del usuario debe ser una de las siguientes opciones: Usuario, Administrador")
]

export const loginValidaciones = [...emailValidacion, ...passwordValidacion];
export const registerValidaciones = [...fullnameValidacion,...emailValidacion,...passwordValidacion];
export const adminValidaciones = [...registerValidaciones, ...rolValidacion];
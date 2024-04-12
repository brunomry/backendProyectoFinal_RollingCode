import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 10, max: 50 })
    .withMessage(
      "El nombre del producto debe contener entre 10 y 50 carácteres"
    ),
  check("precio")
    .notEmpty()
    .withMessage("El precio del producto es obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((valor) => {
      if (valor >= 3500 && valor <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $3500 y $10000");
      }
    }),
  check("imagen")
    .notEmpty()
    .withMessage("La imagen del producto es obligatoria")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe tener un formato de URL valida y terminar en jpg|jpeg|gif|png"
    ),
  check("detalle")
    .notEmpty()
    .withMessage("El detalle del producto es obligatorio")
    .isLength({ min: 10, max: 150 })
    .withMessage(
      "El detalle del producto debe contener entre 10 y 150 carácteres"
    ),
  check("categoria")
    .notEmpty()
    .withMessage("La categoría del producto es un dato obligatorio")
    .isIn(["Pizzas", "Hamburguesas", "Empanadas", "Pastas"])
    .withMessage(
      "La categoría debe ser una de las siguientes opciones: Pizzas, Hamburguesas, Empanadas, Pastas"
    ),
  check("estado")
    .notEmpty()
    .withMessage("El estado del producto es un dato obligatorio")
    .isIn(["Disponible", "No disponible"])
    .withMessage(
      "El estado del producto debe ser una de las siguientes opciones: Disponible, No disponible"
    ),
    (req, res, next) => {
      resultadoValidacion(req, res, next);
    },
];

export default validacionProducto

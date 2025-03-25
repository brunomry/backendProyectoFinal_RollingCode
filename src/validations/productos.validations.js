import { body } from "express-validator";

const productoValidationes = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 10, max: 50 })
    .withMessage(
      "El nombre del producto debe contener entre 10 y 50 carácteres"
    ),
  body("precio")
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
  body("imagen")
    .notEmpty()
    .withMessage("La imagen del producto es obligatoria")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .withMessage(
      "La imagen debe tener un formato de URL valida y terminar en jpg|jpeg|gif|png"
    ),
  body("detalle")
    .notEmpty()
    .withMessage("El detalle del producto es obligatorio")
    .isString()
    .withMessage("El detalle del producto debe ser un string")
    .isLength({ min: 10, max: 150 })
    .withMessage(
      "El detalle del producto debe contener entre 10 y 150 carácteres"
    ),
  body("categoria")
    .notEmpty()
    .withMessage("La categoría del producto es obligatoria")
    .isIn(["Pizzas", "Hamburguesas", "Empanadas", "Pastas"])
    .withMessage(
      "La categoría debe ser una de las siguientes opciones: Pizzas, Hamburguesas, Empanadas, Pastas"
    ),
  body("estado")
    .notEmpty()
    .withMessage("El estado del producto es obligatorio")
    .isIn(["Disponible", "No disponible"])
    .withMessage(
      "El estado del producto debe ser una de las siguientes opciones: Disponible, No disponible"
    )
];

export default productoValidationes;

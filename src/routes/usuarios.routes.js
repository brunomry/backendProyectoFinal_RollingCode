import { Router } from "express";
import {
  crearUsuarioAdmin,
  editarUsuario,
  obtenerUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";
import validarJWT from "../middlewares/jwttoken.middleware.js";
import { adminValidaciones } from "../validations/auth.validations.js";
import resultadoValidacion from "../middlewares/validaciones.middleware.js";
import { idParamValidacion } from "../validations/common.validations.js";

const routerUsuario = Router();

routerUsuario.route("/usuarios").get(obtenerUsuarios);
routerUsuario
  .route("/usuario/:id")
  .post([idParamValidacion, resultadoValidacion, validarJWT], editarUsuario)
  .get([idParamValidacion, resultadoValidacion], obtenerUsuario);
routerUsuario.route("/crearusuario").post([idParamValidacion, adminValidaciones, resultadoValidacion], crearUsuarioAdmin);

export default routerUsuario;

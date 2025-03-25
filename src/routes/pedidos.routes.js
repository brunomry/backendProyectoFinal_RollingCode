import { Router } from "express";

import {
  crearPedido,
  editarPedido,
  obtenerPedido,
  obtenerPedidos,
} from "../controllers/pedidos.controller.js";
import validarJWT from "../middlewares/jwttoken.middleware.js";
import { idParamValidacion } from "../validations/common.validations.js";
import resultadoValidacion from "../middlewares/validaciones.middleware.js";

const routerPedido = Router();

routerPedido.route("/createpedido").post(crearPedido);
routerPedido.route("/pedidos").get(obtenerPedidos);
routerPedido
  .route("/pedido/:id")
  .put([idParamValidacion, resultadoValidacion, validarJWT], editarPedido)
  .get([idParamValidacion, resultadoValidacion], obtenerPedido);

export default routerPedido;

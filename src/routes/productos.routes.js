import { Router } from "express";
import { listarProductos } from "../controllers/productos.controllers.js";

const enrutador = Router();

enrutador.route("/productos").get(listarProductos);
export default enrutador;
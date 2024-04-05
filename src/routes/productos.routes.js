import { Router } from "express";
import { listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const enrutador = Router();

enrutador.route("/productos").get(listarProductos);
enrutador.route("/producto/:id").get(obtenerProducto)


export default enrutador;
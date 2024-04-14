import { Router } from 'express';
import {
  listarProductos,
  obtenerProducto,
  crearProducto,
  borrarProducto,
  editarProducto,
} from '../controllers/productos.controllers.js';
import validacionProducto from '../helpers/validacionDeProductos.js';


const enrutador = Router();

enrutador.route('/productos').get(listarProductos).post([validacionProducto],crearProducto);
enrutador.route('/producto/:id').get(obtenerProducto).delete(borrarProducto).put([validacionProducto],editarProducto);

export default enrutador;

import { Router } from 'express';
import {
  listarProductos,
  obtenerProducto,
  crearProducto,
  borrarProducto,
  editarProducto,
} from '../controllers/productos.controllers.js';
import validacionProducto from '../helpers/validacionDeProductos.js';
import validarJWT from '../helpers/verificarJWT.js';

const enrutador = Router();

enrutador.route('/productos').get(listarProductos).post([validarJWT,validacionProducto],crearProducto);
enrutador.route('/producto/:id').get(obtenerProducto).delete([validarJWT],borrarProducto).put([validarJWT,validacionProducto],editarProducto);

export default enrutador;

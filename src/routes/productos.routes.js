import { Router } from 'express';
import {
  listarProductos,
  obtenerProducto,
  crearProducto,
  borrarProducto,
  editarProducto,
} from '../controllers/productos.controller.js';
import validacionProducto from '../validations/productos.validations.js';
import validarJWT from '../middlewares/jwttoken.middleware.js';

const routerProducto = Router();

routerProducto.route('/productos').get(listarProductos).post([validarJWT,validacionProducto],crearProducto);
routerProducto.route('/producto/:id').get(obtenerProducto).delete([validarJWT],borrarProducto).put([validarJWT,validacionProducto],editarProducto);

export default routerProducto;

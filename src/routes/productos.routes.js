import { Router } from 'express';
import { crearProducto } from '../controllers/productos.controllers.js';

const enrutador = Router();

enrutador.route('/productos').post(crearProducto);

export default enrutador;

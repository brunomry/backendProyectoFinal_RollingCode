import { Router } from 'express';
import {
  crearPedido,
  crearUsuario,
  editarPedido,
  eliminarPedido,
  login,
} from '../controllers/usuarios.controllers.js';

const enrutador = Router();

enrutador.route('/registro').post(crearUsuario);
enrutador.route('/login').post(login);
enrutador.route('/usuario/pedido').post(crearPedido);
enrutador.route('/usuario/pedido/:id').put(editarPedido).delete(eliminarPedido);

export default enrutador;

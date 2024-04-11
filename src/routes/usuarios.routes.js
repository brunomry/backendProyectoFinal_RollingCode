import { Router } from 'express';
import { crearUsuario, login, obtenerUsuario } from '../controllers/usuarios.controllers.js';

const enrutador = Router();

enrutador.route('/registro').post(crearUsuario).get(obtenerUsuario);
enrutador.route('/login').post(login).get(obtenerUsuario);

export default enrutador;

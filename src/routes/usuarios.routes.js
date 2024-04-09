import { Router } from 'express';
import { crearUsuario, login } from '../controllers/usuarios.controllers.js';

const enrutador = Router();

enrutador.route('/registro').post(crearUsuario);
enrutador.route('/login').post(login);

export default enrutador;

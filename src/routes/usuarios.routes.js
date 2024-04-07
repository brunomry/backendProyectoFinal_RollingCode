import { Router } from 'express';
import { crearUsuario } from '../controllers/usuarios.controllers.js';

const enrutador = Router();

enrutador.route('/registro').post(crearUsuario);
enrutador.route('/login');

export default enrutador;

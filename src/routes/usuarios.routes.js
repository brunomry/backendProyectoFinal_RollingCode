import { Router } from 'express';
import { crearUsuario, login } from '../controllers/usuarios.controllers.js';
import validacionRegistro from '../helpers/validacionesDeRegistro.js';


const enrutador = Router();

enrutador.route('/registro').post([validacionRegistro],crearUsuario);
enrutador.route('/login').post(login);

export default enrutador;

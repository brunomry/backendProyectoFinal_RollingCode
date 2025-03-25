import jwt  from "jsonwebtoken";
import 'dotenv/config';
import {config} from "../config/config.js"

const generarJWT = async (correo)=>{
    try {
        const payload = { correo };
        const token = jwt.sign(payload,config.jwtSecret, {
            expiresIn: '1h'
        });
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw new Error('No se pudo generar el token');
    }
}

export default generarJWT;
import jwt  from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = async (_id, correo, rol, nombreCompleto)=>{
    try {
        const payload = { _id, correo, rol, nombreCompleto };
        const token = await jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '1h'
        });
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw new Error('No se pudo generar el token');
    }
}
export default generarJWT
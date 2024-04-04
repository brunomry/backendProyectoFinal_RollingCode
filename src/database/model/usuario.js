import mongoose, {Schema} from "mongoose";


const usuarioSchema = new Schema({
    nombreCompleto:{
        type: String,
        required: true,
        unique: false,
        minLength: 20,
        maxLength: 60
    },
    correo:{
        type: String,
        required: true,
        unique: true,
        minLength: 13,
        maxLength: 35
    },
    contrasenia:{
        type: String,
        required: true,
        unique: false,
        minLength: 8,
        maxLength:50
    },
    estado:{
        type: Boolean,
        required: true
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema);

export default Usuario;
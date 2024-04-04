import mongoose from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 25,
    }
})
import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 25,
    },
    precio:{
        type: Number,
        required: true,
        min: 3500,
        max: 10000,
    },
    imagen:{
        type: String,
        required: true,
    }
})
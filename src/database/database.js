import mongoose from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;

datosConexion.once("open",()=>{
  console.log("base de datos conectada");
})
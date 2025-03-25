import mongoose from "mongoose";
import "dotenv/config";
import { config } from "./config.js";

mongoose.connect(config.dbUri);

const db = mongoose.connection;

db.once("open",()=>{
  console.log("base de datos conectada");
})

db.on("error", (error) => {
  console.error("Error en la conexión a MongoDB", error);
})
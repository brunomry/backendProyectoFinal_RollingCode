import fs from "fs-extra";
import transporter from "../helpers/mailer.js";
import Handlebars from "handlebars";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

export const enviarCorreo = async (req, res) => {
  const pathHTML = path.resolve("correoDeConfirmacion.html");
  console.log(pathHTML);
  const template = fs.readFileSync(pathHTML, "utf8").toString();
  console.log(template);
  const { correo } = req.body;
  try {
    const resultado = await transporter.sendMail({
      from: `AmbienteBohemio ${process.env.EMAIL}`,
      to: correo,
      subject: "Registro Ambiente Bohemio",
      body: "Verificacion",
      html: template,
    });
    console.log(resultado);
    res.status(200).json({
      message: "correo enviado exitosamente!",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Hubo un error en la solicitud",
    });
  }
};
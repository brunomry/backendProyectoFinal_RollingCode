import { MercadoPagoConfig, Preference } from "mercadopago";

const accessToken = process.env.TOKEN_MP;
const publicKey = process.env.MP_TOKEN_ACCESS;
const client = new MercadoPagoConfig({ accessToken });

export const crearPreferenciaMP = async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: 1,
          unit_price: Number(req.body.unit_price),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: "https://ambiente-bohemio-restaurante.netlify.app/menu"
      },
    };
    const preference = new Preference(client);
    const result = await preference.create({body});
    const preferenceID = result.id;
    console.log(preferenceID)
    res.json({
        respuesta : result,
        preferenceID: preferenceID,
        publicKey: publicKey
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
        message: "Error al crear la preferencia"
    })
  }
};
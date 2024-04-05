import Producto from "../database/model/producto.js"

export const listarProductos = async (req, res) =>{
    try{
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "No se pudo conseguir la lista de productos"
        })
    }
}
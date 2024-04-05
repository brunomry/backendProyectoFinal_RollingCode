import Producto from "../database/model/producto.js"

export const listarProductos = async (req, res) =>{
    try{
        const listaDeProductos = await Producto.find();
        res.status(200).json(listaDeProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "No se pudo conseguir la lista de productos"
        })
    }
}

export const obtenerProducto = async (req, res) => {
    try{
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: "El producto no existe o no pudo ser encontrado"
        })
    }
}
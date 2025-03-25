export const formatoRespuesta = (success, message, data = null, error = null) =>{
    return {
        success,
        message,
        data,
        error
    }
}
const api_url='http://localhost:5000';

export const listarEntidad=async ({entidad='mascotas'})=>{
    try {
        const respuesta=await fetch(`${api_url}/${entidad}`)
        const datos=await respuesta.json();
        return datos;
    } catch (error) {
        throw error;
    }

}
export const crearEntidad=async ({entidad='mascotas',objeto={}})=>{
    try {
        const respuesta=await fetch(`${api_url}/${entidad}`)
        const datos=await respuesta.json();
        return datos;
    } catch (error) {
        throw error;
    }

}

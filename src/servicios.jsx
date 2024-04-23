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
export const crearEntidad=async ({entidad='mascotas',objeto={},method='POST',idObjeto=null})=>{
    try {
        let url=`${api_url}/${entidad}`;
        if(method=='PUT' && idObjeto){
            url+=`/${idObjeto}`;
        }
        const respuesta=await fetch(url,{
            method,
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(objeto),
            mode:'cors',
        })
        const datos=await respuesta.json();
        return datos;
    } catch (error) {
        throw error;
    }

}

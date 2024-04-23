module.exports= function consultasHandler({consultas,veterinarios,mascotas}){
    return {
        get:(data,callback)=>{
           if(typeof data.indice !== 'undefined'){
              if(consultas[data.indice]){
                 return callback(200,consultas[data.indice]);
              }
                 return callback(404,{mensaje:`consulta con indice ${data.indice} no encontrada`});
           }
           const consultaConREalciones=consultas.map((consulta)=>(
            {...consulta,
               mascota:{...mascotas[consulta.mascota],id:consulta.mascota},
               veterinario:{...veterinarios[consulta.veterinario],id:consulta.veterinario},}
           ))
           callback(200,consultaConREalciones);
        },
        post:(data,callback)=>{
            let newConsulta=data.payload;
            newConsulta.fechaCreacion=new Date();
            newConsulta.fechaEdicion=null;
            consultas = [...consultas,newConsulta];
           callback(201,newConsulta);
        },
        put:(data,callback)=>{
           if(typeof data.indice !== 'undefined'){
              if(consultas[data.indice]){
                const {fechaCreacion}=consultas[data.indice];
                consultas[data.indice]={
                    ...data.payload,
                    fechaCreacion,
                    fechaEdicion:new Date()
                };
                 return callback(200,consultas[data.indice]);
              }
                 return callback(404,{mensaje:`consulta con indice ${data.indice} no encontrado`});
           }
           callback(400,{mensaje:'indice no enviado'});
        },
        delete:(data,callback)=>{
           if(typeof data.indice !== 'undefined'){
              if(consultas[data.indice]){
                consultas= consultas.filter((_consulta,indice)=>indice!=data.indice)
                 return callback(204,{mensaje:`consulta con indice ${data.indice} eliminado`});
              }
                 return callback(404,{mensaje:`consulta con indice ${data.indice} no encontrada`});
           }
           callback(400,{mensaje:'indice no enviado'});
        }
     };
}





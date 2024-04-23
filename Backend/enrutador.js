
const recursos=require('./recursos');
const mascotas=require('./Rutas/mascotas');
const veterinarios=require('./Rutas/veterinarios');
const propietarios=require('./Rutas/propietarios');
const consultas=require('./Rutas/consultas');


module.exports={
   ruta:(data,callback)=>{
      callback(200,{mensaje:'esta es /ruta'});
   },
   mascotas: mascotas(recursos.mascotas),
   veterinarios: veterinarios(recursos.veterinarios),
   propietarios: propietarios(recursos.propietarios),
   consultas:consultas(recursos),
   noEncontrado:(data,callback)=>{
      callback(404,{mensaje:'no encontrado'});
   }
}
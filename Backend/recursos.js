module.exports = {
    mascotas:[
       {nombre:"firu",propietario:"camilo",tipo:"Perro"},
       {nombre:"lola",propietario:"diego",tipo:"Gato"},
       {nombre:"firu",propietario:"camilo",tipo:"Perro"},
       {nombre:"firu",propietario:"camilo",tipo:"Perro"}
    ],
    veterinarios:[
      {nombre:'maria',apellido:'perez',grado:'1'},
      {nombre:'maria',apellido:'perez',grado:'1'},
      {nombre:'maria',apellido:'perez',grado:'1'},
      {nombre:'maria',apellido:'perez',grado:'1'},
   ],
   propietarios:[
      {nombre:'maria',mascota:'lola',telefono:'15463764'},
      {nombre:'maria',mascota:'lola',telefono:'15463764'},
      {nombre:'maria',mascota:'lola',telefono:'15463764'},
      {nombre:'maria',mascota:'lola',telefono:'15463764'},
      {nombre:'maria',mascota:'lola',telefono:'15463764'},
   ],
   consultas:[
      {
         mascota:0,
         veterinario:0,
         fechaCreacion:new Date(),
         fechaEdicion:new Date(),
         diagnostico:'',
         historia:'',
      }
   ]
 }
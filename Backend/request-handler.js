
const url = require('url');
const StringDecoder=require('string_decoder').StringDecoder;
const enrutador=require('./enrutador');

module.exports= (req, res)=>{

    //creando la url
   
      const miURl=new URL(req.url,'https://localhost:5000/');
   
    //obteniendo la ruta del url(el elemento hasta el ?)
   
      const ruta = miURl.pathname;
   
    //eliminando los slash
   
      const rutaLimpia = ruta.replace(/^\/+|\/+$/g,'');
   
    //obteniendo el query
   
      const  query=miURl.searchParams;
   
    //obteniendo el metodo del request
   
      const metodo=req.method.toLowerCase();

   //dar permiso de CORS escribiendo los headers
      res.setHeader("Access-Control-Allow-Origin","*");
      res.setHeader("Access-Control-Request-Methods","OPTIONS,GET,PUT,DELETE,POST");
      res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,PUT,DELETE,POST");
      res.setHeader("Access-Control-Allow-Headers","*");
  //dar respuesta inmediata cuando el metodo sea options
      if(metodo==='options'){
        res.writeHead(200);
        res.end();
        return;
      }
    //obteniendo el header de request
   
      const {headers={}}=req;
   
    //obtener payload en el caso qeu tenga
   
      const decoder = new StringDecoder('utf8');
      let buffer='';
   
    //ir acumulando la data cuando el request reciba un payload
   
      req.on('data',(data)=>{
         buffer +=decoder.write(data);
      });
    //terminar de acumular datos y decirle al decoder que finalice
      req.on('end',()=>{
         buffer +=decoder.end();

         if(headers['content-type']==='application/json'){
            buffer=JSON.parse(buffer);
         }
    //revisar si tiene sub ruta,en este caso es el indice del array
   
         if(rutaLimpia.indexOf("/")>-1){
             //separo la ruta
            var [rutaPrincipal,indice]=rutaLimpia.split("/");
         }
    //ordenar data del request
         const data={
            indice,
            ruta:rutaPrincipal || rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer,
         };


    //elegir el handler(manejador) de la respuesta
         let handler;
         if(data.ruta && enrutador[data.ruta]&&enrutador[data.ruta][metodo]){
            handler= enrutador[data.ruta][metodo];
         }else{
            handler=enrutador.noEncontrado;
         }
    //ejecutar handler para enviar respuesta
         if(typeof handler === 'function'){
            handler(data,(statusCode = 200,mensaje)=>{
               const respuesta=JSON.stringify(mensaje);
               res.setHeader("Content-Type","application/json");
               res.writeHead(statusCode);
                //linea donde realmente ya se esta respondiendo a la aplicacion cliente
               res.end(respuesta);
            })
         }
       });
    }; 
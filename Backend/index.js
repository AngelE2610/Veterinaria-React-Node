const http = require('http');
const requestHandler = require('./request-handler');
const recursos = require('./recursos');
global.recursos=recursos;
//Creando server



const server=http.createServer(requestHandler);
server.listen(5000,()=>{
   console.log('ando pinchando');
});



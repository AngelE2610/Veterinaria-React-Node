import React,{useState} from 'react'
import Encabezado from './encabezado';
import Fila from './fila';
function Tabla({entidades =[]}) {
  
const columnas=entidades.length>0? Object.keys(entidades[0]) : [];
    return (<table className="table table-responsive-md">
    <Encabezado columnas={columnas}/>
    <tbody id="listaentidades">
    {entidades.map((entidad,index)=>
            <Fila key={`fila-${index}`} entidad={entidad} index={index} />
        )}
    </tbody>
  </table>);
}

export default Tabla;
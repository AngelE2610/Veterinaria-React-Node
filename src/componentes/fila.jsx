import React from 'react'
import BotonAccion from './btonAccion';
function Fila({entidad,index}){
    

return (
<tr>
            <th scope="row">{index}</th>
            <td>{entidad.nombre}</td>
            <td>{entidad.propietario}</td>
            <td>{entidad.tipo}</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
             <BotonAccion tipo='editar' />
             <BotonAccion tipo='eliminar' />
              </div>
            </td>
          </tr>
  
  )
}
export default Fila;
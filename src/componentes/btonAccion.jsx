import React from 'react'
import classNames from 'classnames'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit,faTrashAlt} from '@fortawesome/free-solid-svg-icons'
function BotonAccion({tipo}){
    return (
        <button type="button" 
        className={classNames("btn", {"btn-info":tipo==='editar',"btn-danger":tipo==='eliminar'})} 
        data-toggle="modal" data-target="#Modal">
            {tipo === 'editar' && <FontAwesomeIcon icon={faEdit}/>}
            {tipo === 'eliminar' && <FontAwesomeIcon icon={faTrashAlt}/>}
            </button>
    )
}

export default BotonAccion;
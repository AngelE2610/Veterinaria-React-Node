import React from 'react'
import './css/modal-Header.css'
function ModalHeader({cambiarModal=()=>{}}){
    return (
        <div className="modal-header">
          <h5 className="modal-title" id="ModalLabel">Nueva Mascota</h5>
          <button type="button" className="close cerrar" data-dismiss="modal" aria-label="Close" onClick={cambiarModal}>
            <span aria-hidden="true">&times;</span>
          </button>
          
        </div>
    )
}

export default ModalHeader;
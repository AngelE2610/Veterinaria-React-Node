import React from 'react'
import ModalHeader from './modal_Header';
import ModalSelect from './modal_Select';
import Input from './input';
import './css/modal.css'

function Modal({cambiarModal=()=>{}}) {
    return (<div className="caja" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="" role="document">
      <div className="modal-content">
        <ModalHeader cambiarModal={cambiarModal}/>
        <div className="caja-body">
          <form id="form">
            <input type="hidden" id="indice"/>
            <div className="form-row">
            <Input tipo='text' nombrecampo='Nombre' />
            <Input tipo='text' nombrecampo='Propietario' />
            
            <div className="col">
              <ModalSelect options={
                [{valor:'perro',etiqueta:'perro'},
                 {valor:'gato',etiqueta:'gato'},
                 {valor:'pez',etiqueta:'pez'},
                 {valor:'ave',etiqueta:'ave'},
                {valor:'otro',etiqueta:'otro'}]
              }
              nombrecampo='Tipo Animal'
              />
            </div>
          </div>
          </form>
          <div className="caja-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={cambiarModal}>Close</button>
            <button type="submit" className="btn btn-primary " id="btn-guardar" data-dismiss="modal" onClick={cambiarModal}>Crear</button>
            </div>
        </div>
      </div>
    </div>
  </div>);
}

export default Modal;
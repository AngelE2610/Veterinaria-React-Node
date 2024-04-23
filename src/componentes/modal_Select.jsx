import React from 'react'

function ModalSelect({options=[],nombrecampo=''}){
    return (
        <div className="form-group">
                <label for="selector">{nombrecampo}</label>
                <select className="form-control" id="selector">
                  {options.map(({valor,etiqueta},index)=>(
                    <option key={`${nombrecampo}-${index}-${valor}`}>{etiqueta}</option>
                  ))}
                </select>
              </div>
    )
}

export default ModalSelect;
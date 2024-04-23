import React from 'react'

function ModalSelect({options=[],nombreCampo='',placeHolder,onChange=()=>{}}){
    return (
        <div className="form-group">
                <label htmlFor="selector">{placeHolder}</label>
                <select className="form-control" name={nombreCampo} onChange={onChange} id="selector">
                  {options.map(({valor,etiqueta},index)=>(
                    <option key={`${placeHolder}-${index}-${valor}`}>{etiqueta}</option>
                  ))}
                </select>
              </div>
    )
}

export default ModalSelect;
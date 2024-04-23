import React from 'react'

function Input({tipo='text',nombrecampo}){
    return (
        <div className="col">
              <label for={nombrecampo}>{nombrecampo}</label>
              <input type={tipo} className="form-control" id={nombrecampo} placeholder={nombrecampo}/>
            </div>
    )
}

export default Input;
import React from 'react'

function Input({tipo='text',nombreCampo,placeHolder,onInput=()=>{}}){
    return (
        <div className="col">
              <label htmlFor={placeHolder}>{placeHolder}</label>
              <input type={tipo} name={nombreCampo} className="form-control" onInput={onInput} id={placeHolder} placeholder={placeHolder}/>
            </div>
    )
}

export default Input;
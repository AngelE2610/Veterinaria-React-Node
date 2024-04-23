import React,{useState} from 'react'
import Alert from './alert';

function Action_Menu({cambiarModal=()=>{},titulo}) {
    
    return (<div className="action-menu">
    <button type="button" className="btn btn-primary my-2 my-sm-0" 
    data-toggle="modal" data-target="#Modal"onClick={cambiarModal} >
      Nueva {titulo}
    </button>
    {/* {<Alert/>} */}
  
  </div>);
}

export default Action_Menu;
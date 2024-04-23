import React from 'react'


function Alert({alertSwitch=()=>{}}) {
    return (
    <div className="alert alert-danger alert-dismissible alerta" role="alert">
      <strong>Holy guacamole!</strong> Algo hicimos mal vuelve a intentarlo.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={alertSwitch}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
);
}

export default Alert;
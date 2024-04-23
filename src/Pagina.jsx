import React,{Component} from 'react'
import Nav from './componentes/nav';
import Action_Menu from './componentes/action-menu';
import Tabla from './componentes/tabla';
import Modal from './componentes/modal';
import {listarEntidad,crearEditarEntidad} from './servicios'


class Pagina extends Component{

  constructor(props){
    super(props);
    this.state={
      mostrarModal:false,
      entidades:[],
      objeto:{},
    }
  }

  cambiarModal=()=>{
    this.setState({mostrarModal:!this.state.mostrarModal});
  }
  listar=async ()=>{
    const {entidad}=this.props;
    const entidades=await listarEntidad({entidad});
    this.setState({entidades});
  }
  manejarInput=(evento)=>{
    const {target}=evento;
    console.log({evento});
  }
  crearEntidad(){
    
  }
  componentDidMount(){
    this.listar();
  }
render(){
  const {titulo}= this.props;
  return (
    <div className="container">
       <Nav />
    <div className="heading">
      <h1>Clinica Veterinaria: <strong>{titulo}</strong></h1>
    </div>
      <Action_Menu titulo='Mascota' cambiarModal={this.cambiarModal}/>
      <Tabla entidades={this.state.entidades}/>
      {this.state.mostrarModal && <Modal manejarInput={this.manejarInput} cambiarModal={this.cambiarModal}/>}
    </div>
      
      )
}
}

export default Pagina;

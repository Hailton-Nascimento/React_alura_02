import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor(){
    super();
    this.state={notas:[]};
    this._novaNota = this._novaNota.bind(this);
  }

  componentDidMount(){
    this.props.notas.increver(this._novaNota)
    
  }
componentWillUnmount(){
  this.props.notas.desincrever(this._novaNota)
}

  _novaNota(nota){
    this.setState({...this.state,nota});

  }
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota  
                index={index}
                deletarNota={this.props.deletarNota}
                titulo={nota.titulo} texto={nota.texto}
                categoria= {nota.categoria}
                
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;

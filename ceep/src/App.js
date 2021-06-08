import './assets/App.css';
import './assets/index.css';

import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeNotas from "./components/ListaDeNotas/index"

class App extends Component {

  constructor(){
    super();
    this.state={
      notas:[]
    };
  }

  criarNota(titulo,texto){
    const novaNota={titulo,texto};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado ={
      notas:novoArrayNotas
    }
    
    this.setState(novoEstado);
  }
  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas});
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas 
        notas= {this.state.notas}
        deletarNota={this.deletarNota.bind(this)}
        />
      </section>
    );
  }
}

export default App;
import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
    this.categoria="peixe frito";
  }
  _handleMudancaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value;
  }
  _handleMudancaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value;
  }
  _handleMudancaCateorgia(evento){
    evento.stopPropagation()
    this.categoria = evento.target.value;
  }
  _criarNota(evento){
    evento.stopPropagation();
    evento.preventDefault();
    this.props.criarNota(this.titulo,this.texto,this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={this._criarNota.bind(this)}
      >
        <select 
          required
          className="form-cadastro_input"
          onChange={this._handleMudancaCateorgia.bind(this)}
        ><option  selected> Sem Categoria</option>
          {this.props.categorias.map((categoria, key)=>{
            return <option id={key}>{categoria}</option>
          })}

        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          required
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          required
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;

import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "peixe frito";
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);

  }
  componentDidMount() {
    this.props.categorias.increver(this._novasCategorias);

  }
  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })
  }
  _handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value;
 
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value;
  }

  _handleMudancaCateorgia(evento) {
    evento.stopPropagation()
    this.categoria = evento.target.value;
  }

  _criarNota(evento) {
    evento.stopPropagation();
    evento.preventDefault();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    var elementos = evento.target.childNodes;
    elementos.forEach(element => {
     element.value="";
   });
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
        ><option selected> Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
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

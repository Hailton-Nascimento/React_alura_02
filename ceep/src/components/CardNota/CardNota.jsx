import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete_outline_black_18dp.svg"
class CardNota extends Component {

  apagar(){
    const index = this.props.index;
    this.props.deletarNota(index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        
      </section>
    );
  }
}

export default CardNota;

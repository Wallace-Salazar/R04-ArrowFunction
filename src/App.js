//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import "./styles.css";
import React, { Component } from "react";

class mensagem extends Component {
  mensagem = () => {
    return (
      <h3>
        “Nada melhor que um programador preguiçoso. Você usa coisas que já estão
        prontas e tudo fica mais simples.”
      </h3>
    );
  };
  autor = () => {
    return <p>― Vint Cerf</p>;
  };
  dobro = () => 2 + 2;

  multiply = () => {
    return 2 * 2;
  };

  render() {
    return (
      <div className="container">
        <h3>{this.mensagem()}</h3>
        <p>{this.autor()}</p>
        <p>{this.dobro()}</p>
        <p>{this.multiply()}</p>
      </div>
    );
  }
}
export default mensagem;

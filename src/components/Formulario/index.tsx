import React from "react";
import Botao from "../Botao";
import "./Formulario.scss";
class Formulario extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione uma tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar ?"
            required
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="02:00:00"
          />
        </div>
        <Botao />
      </form>
    );
  }
}
export default Formulario;

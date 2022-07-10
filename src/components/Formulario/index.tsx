import React from "react";
import { Itarefa } from "../../types/Itarefa";
import Botao from "../Botao";
import "./Formulario.scss";
class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00"
  };
  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state }
    ]);
  }
  render() {
    return (
      <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}>
        <div className="inputContainer">
          <label htmlFor="tarefa">Adicione uma tarefa</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
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
            value={this.state.tempo}
            onChange={(evento) =>
              this.setState({ ...this.state, tempo: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="02:00:00"
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}
export default Formulario;

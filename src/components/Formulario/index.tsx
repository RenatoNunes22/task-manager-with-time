import React, { useState } from "react";
import { Itarefa } from "../../types/Itarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() }
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione uma tarefa</label>
        <input
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar ?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          id="tempo"
          min="00:00:00"
          max="02:00:00"
        />
      </div>
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}

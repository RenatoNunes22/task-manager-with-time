import React from "react";
import "./Lista.scss";
import Item from "./Item";
import { Itarefa } from "../../types/Itarefa";

export default function Lista({ tarefas }: { tarefas: Itarefa[] }) {
  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import style from "./App.module.scss";
import { Itarefa } from "../types/Itarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();
  function selecionaTarefa(tarefaSelecionado: Itarefa) {
    setSelecionado(tarefaSelecionado);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefas) => ({
        ...tarefas,
        selecionado: tarefas.id === tarefaSelecionado.id ? true : false
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefas) => {
          if (tarefas.id === selecionado.id) {
            return {
              ...tarefas,
              selecionado: false,
              completado: true
            };
          }
          return tarefas;
        })
      );
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
    </div>
  );
}

export default App;

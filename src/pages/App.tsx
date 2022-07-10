import React, { useState } from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import "./App.scss";
import { Itarefa } from "../types/Itarefa";

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;

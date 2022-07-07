import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import Cronometro from "../components/Cronometro";
import "./App.scss";
function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;

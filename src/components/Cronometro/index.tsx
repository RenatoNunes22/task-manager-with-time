import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";
import { useState } from "react";

interface Props {
  selecionado: Itarefa | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [time, setTime] = useState<number>();
  if (selecionado?.tempo) {
    setTime(tempoParaSegundos(selecionado.tempo));
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}

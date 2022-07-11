import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/time";
import { Itarefa } from "../../types/Itarefa";
import { useEffect, useState } from "react";

interface Props {
  selecionado: Itarefa | undefined;
  finalizarTarefa(): () => void;
}

export default function Cronometro({ selecionado, finalizarTarefa }: Props) {
  const [time, setTime] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo)
      setTime(tempoParaSegundos(String(selecionado.tempo)));
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTime(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma matéria e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={time} />
      </div>
      <Botao onClick={() => regressiva(time)}>Começar</Botao>
    </div>
  );
}

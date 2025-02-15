import { useContext, useState } from "react";
import { ReceitaContext } from "../contexto/ReceitaContext";
import IReceita from "../interface/IReceita";

const useReceita = () => {
  const { receitas, setReceitas, receitaSelecionada, setReceitaSelecionada } = useContext(ReceitaContext);

  const aoEditar = (id: number) => {
    setReceitaSelecionada(receitas.find((receita: IReceita) => receita.id === id));
    console.log(receitaSelecionada);
  };

  const apagarReceita = (id: number) => {
    setReceitas(receitas.filter((receita: IReceita) => receita.id !== id));
  };

  const atualizarReceita = (receita: IReceita) => {
    setReceitas(receitas.map((r: IReceita) => (r.id === receita.id ? receita : r)));
    setReceitaSelecionada(receita);
  };

  return {
    receitas,
    receitaSelecionada,
    aoEditar,
    apagarReceita,
    atualizarReceita,
  };
};

export default useReceita;

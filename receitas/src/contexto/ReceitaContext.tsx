import { createContext, useEffect, useState } from "react";
import ReceitaContextData from "../interface/ReceitaContextData";
import IReceita from "../interface/IReceita";
// import json from "../json/db.json"

const ReceitaContext = createContext<ReceitaContextData>({
  receitas: [],
  setReceitas: () => {},
  receitaSelecionada: null,
  setReceitaSelecionada: () => {},
});

interface ReceitaProviderProps {
  children: React.ReactNode;
}

const ReceitaProvider = ({ children }: ReceitaProviderProps) => {
  const [receitaSelecionada, setReceitaSelecionada] = useState<IReceita | null>(
    null
  );
  const [receitas, setReceitas] = useState<IReceita[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((resposta) => resposta.json())
      .then((json) => setReceitas(json["recipes"]));
  }, []);

  return (
    <ReceitaContext.Provider
      value={{
        receitas,
        setReceitas,
        receitaSelecionada,
        setReceitaSelecionada,
      }}
    >
      {children}
    </ReceitaContext.Provider>
  );
};

export { ReceitaContext, ReceitaProvider };

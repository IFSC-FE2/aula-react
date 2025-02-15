import IReceita from "./IReceita";

interface ReceitaContextData {
    receitas: IReceita[];
    setReceitas: React.Dispatch<React.SetStateAction<IReceita[]>>;
    receitaSelecionada: IReceita | null;
    setReceitaSelecionada: React.Dispatch<React.SetStateAction<IReceita | null>>;
}

export default ReceitaContextData;
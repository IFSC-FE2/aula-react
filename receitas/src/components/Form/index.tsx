import { useParams } from "react-router";
// import IngredienteInput from "../IngredienteInput";
import useReceita from "../../hooks/useReceita";
import IReceita from "../../interface/IReceita";

const Form = () => {
  const params = useParams();
  const id = Number(params.id);

  const { receitas, atualizarReceita } = useReceita();
  const receita = receitas.find((receita: IReceita) => receita.id === id);
  console.log(receitas);

  if (!receita) {
    return <h2>Receita não encontrada</h2>;
  }

  return (
    <div>
      <form>
        <h2>Editar receita</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome da receita"
          value={receita.name}
          onChange={(e) => atualizarReceita({ ...receita, name: e.target.value })}
        />
        <div>
          <h3>Ingredientes</h3>
          <ul>
            {receita.ingredients.map((ingrediente: string, i: number) => (
              <li key={i}>
                <input
                  type="text"
                  name="ingrediente"
                  value={ingrediente}
                  onChange={(e) => {
                    const ingredients = receita.ingredients.map((ing: string, j: number) =>
                      i === j ? e.target.value : ing
                    );
                    atualizarReceita({ ...receita, ingredients });
                  }}
                ></input>
                {/* <IngredienteInput
                  nome={ingrediente.nome}
                  quantidade={ingrediente.quantidade}
                  medida={ingrediente.medida}
                  aoAtualizar={(ingredienteAtualizado) => {
                    const ingredientes = receita.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                    aoAtualizar({ ...receita, ingredientes });
                  }}
                /> */}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Modo de preparo</h3>
          <ol>
            {receita.instructions.map((instrucao: string, i: number) => (
              <li key={i}>
                <input
                  type="text"
                  name="instrucao"
                  value={instrucao}
                  placeholder={`Passo ${i + 1}`}
                  onChange={(e) => {
                    const instrucoes = receita.instrucoes.map((inst: string, j: number) =>
                      i === j ? e.target.value : inst
                    );
                    atualizarReceita({ ...receita, instrucoes });
                  }}
                />
              </li>
            ))}
          </ol>
        </div>
      </form>
    </div>
  );
};

export default Form;

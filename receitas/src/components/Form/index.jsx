import { useParams } from "react-router";
import IngredienteInput from "../IngredienteInput";
import useReceita from "../../hooks/useReceita";

const Form = ({ aoAtualizar }) => {

  const params = useParams();
  const id = Number(params.id);
  
  const { receitas } = useReceita();
  const receita = receitas.find(receita => receita.id === id);
  console.log(receitas)

  if(!receita) {
    return (<h2>Receita não encontrada</h2>)
  }
  
  return (
    <div>
      <form>
        <h2>Editar receita</h2>
        <input
          type="text"
          name="nome"
          placeholder="Nome da receita"
          value={receita.nome}
          onChange={(e) => aoAtualizar({ ...receita, nome: e.target.value })}
        />
        <div>
          <h3>Ingredientes</h3>
          <ul>
            {receita.ingredientes.map((ingrediente, i) => (
              <li key={i}>
                <IngredienteInput
                  nome={ingrediente.nome}
                  quantidade={ingrediente.quantidade}
                  medida={ingrediente.medida}
                  aoAtualizar={(ingredienteAtualizado) => {
                    const ingredientes = receita.ingredientes.map((ing, j) => i === j ? ingredienteAtualizado : ing);
                    aoAtualizar({ ...receita, ingredientes });
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Modo de preparo</h3>
          <ol>
            {receita.instrucoes.map((instrucao, i) => (
              <li key={i}>
                <input
                  type="text"
                  nome="instrucao"
                  value={instrucao}
                  placeholder={`Passo ${i + 1}`}
                  onChange={(e) => {
                    const instrucoes = receita.instrucoes.map((inst, j) =>
                      i === j ? e.target.value : inst);
                    aoAtualizar({ ...receita, instrucoes })
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

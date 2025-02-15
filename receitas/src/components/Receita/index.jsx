import "./style.css";
import Avaliacao from "../Avaliacao/index.jsx";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import useReceita from "../../hooks/useReceita.jsx";
import { Link } from "react-router";

const Receita = ({ id }) => {
  const { receitas, apagarReceita, aoEditar } = useReceita();
  const receita = receitas.find((receita) => receita.id === id);

  return (
    <section className="receita-card">
      <h2>{receita.name}</h2>
      <h3>Ingredientes</h3>
      <ul>
        {receita.ingredients.map((ingrediente, i) => (
          <li key={i}>
            {ingrediente}
          </li>
        ))}
      </ul>
      <h3>Modo de preparo</h3>
      <ol>
        {receita.instructions.map((instrucao, i) => (
          <li key={i}>{instrucao}</li>
        ))}
      </ol>
      <div className="rodape">
        <Avaliacao />
        <div>
          <Link to={`/${id}`}>
            <FaRegEdit onClick={() => aoEditar(id)} />
          </Link>
          <FaRegTrashAlt onClick={() => apagarReceita(id)} />
        </div>
      </div>
    </section>
  );
};

export default Receita;

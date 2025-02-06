import './style.css';
import Avaliacao from '../Avaliacao/index.jsx'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

const Receita = ({ id, nome, ingredientes, instrucoes, aoEditar, aoApagar }) => {

    return (
        <section className="receita-card">
            <h2>{nome}</h2>
            <h3>Ingredientes</h3>
            <ul>
                {ingredientes.map((ingrediente, i) => (
                    <li key={i}>{ingrediente.quantidade} {ingrediente.medida} de {ingrediente.nome}</li>
                ))}
            </ul>
            <h3>Modo de preparo</h3>
            <ol>
                {instrucoes.map((instrucao, i) => (
                    <li key={i}>{instrucao}</li>
                ))}
            </ol>
            <div className='rodape'>
                <Avaliacao />
                <div>
                    <FaRegEdit onClick={() => aoEditar(id)} />
                    <FaRegTrashAlt onClick={() => aoApagar(id)}/>
                </div>
            </div>
        </section>
    )
}

export default Receita;
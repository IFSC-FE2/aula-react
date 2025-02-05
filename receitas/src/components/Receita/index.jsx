import './style.css';
import Avaliacao from '../Avaliacao/index.jsx'

const Receita = ({ nome, ingredientes, instrucoes }) => {

    return (
        <section className="receita-card">
            <h2>{nome}</h2>
            <h3>Ingredientes</h3>
            <ul>
                {ingredientes.map((ingrediente, i) => (
                    <li key={i}>{ingrediente.quantidade} {ingrediente.medida} de {ingrediente.nome}</li>
                ))}
            </ul>
            <h3>Mode de preparo</h3>
            <ol>
                {instrucoes.map((instrucao, i) => (
                    <li key={i}>{instrucao}</li>
                ))}
            </ol>
            <Avaliacao />
        </section>
    )
}

export default Receita;
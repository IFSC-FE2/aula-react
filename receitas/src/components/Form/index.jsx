const Form = ({ receita, aoAtualizar }) => {

    return (
        <div>
            {receita && <form>
                <h2>Editar receita</h2>
                <input type="text"
                    name="nome"
                    placeholder="Nome da receita"
                    value={receita.nome}
                    onChange={(e) => aoAtualizar({...receita, nome: e.target.value})}
                />
                <div>
                    <h3>Ingredientes</h3>
                    <ul>
                        {receita.ingredientes.map((ingrediente, i) => (
                            <li key={i}>
                                <input type="text"
                                    value={ingrediente.nome}
                                />
                                <input type="text"
                                    value={ingrediente.quantidade}
                                />
                                <input type="text"
                                    value={ingrediente.medida}
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
                                <input type="text"
                                    nome="instrucao"
                                    value={instrucao}
                                    placeholder={`Passo ${i + 1}`} />
                            </li>
                        ))}
                    </ol>
                </div>
            </form>}
        </div>
    )
}

export default Form;
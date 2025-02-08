import Cabecalho from "./components/Cabecalho/Cabecalho";
import "./App.css";
import { ReceitaProvider } from "./contexto/ReceitaContext";
import Principal from "./components/Principal";

function App() {
  return (
    <div>
      <Cabecalho titulo="Receitas Deliciosas" />
      <ReceitaProvider>
        <Principal />
      </ReceitaProvider>
    </div>
  );
}

export default App;

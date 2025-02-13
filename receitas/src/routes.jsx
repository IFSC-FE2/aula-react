import Cabecalho from "./components/Cabecalho/Cabecalho";
import "./App.css";
import { ReceitaProvider } from "./contexto/ReceitaContext";
import Principal from "./components/Principal";
import { BrowserRouter, Route, Routes } from "react-router"
import Form from "./components/Form";

function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Cabecalho titulo="Receitas Deliciosas" />
        <ReceitaProvider>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/:id" element={<Form />} />
            <Route path="/adicionar" element={<h1>Nova Receita</h1>} />
            <Route path="*" element={<h2>Página não econtrada</h2>} />
          </Routes>
        </ReceitaProvider>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;

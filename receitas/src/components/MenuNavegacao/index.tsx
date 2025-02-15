import { Link, useLocation } from "react-router";
import "./style.css"
import LinkNavegacao from "../LinkNavegacao";

const MenuNavegacao = () => {

    const localizacao = useLocation();

    return (
        <nav className="menu-navegacao">
            <LinkNavegacao to={'/'}>home</LinkNavegacao>
            <LinkNavegacao to={'/adicionar'}>nova receita</LinkNavegacao>
        </nav>
    )
}

export default MenuNavegacao;
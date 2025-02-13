import { Link, useLocation } from "react-router";
import "./style.css"

const LinkNavegacao = ({ children, to }) => {

    const localizacao = useLocation();

    return (
        <Link to={to} className={`link ${localizacao.pathname === to ? 'linkSelecionado' : ''}`}>{children}</Link>
    )
}

export default LinkNavegacao;
import { Link, useLocation } from "react-router";
import "./style.css"

interface LinkNavegacaoProps {
    children: React.ReactNode;
    to: string;
}

const LinkNavegacao = ({ children, to }: LinkNavegacaoProps) => {

    const localizacao = useLocation();

    return (
        <Link to={to} className={`link ${localizacao.pathname === to ? 'linkSelecionado' : ''}`}>{children}</Link>
    )
}

export default LinkNavegacao;
import MenuNavegacao from "../MenuNavegacao";

interface CabecalhoProps {
    titulo: string
}

export default function Cabecalho(props: CabecalhoProps) {

    return (
        <header style={{ textAlign: "center"}}>
            <h1>{props.titulo}</h1>
            <MenuNavegacao />
        </header>
    )
}
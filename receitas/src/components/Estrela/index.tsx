import { FaStar } from 'react-icons/fa'

interface EstrelaProps {
    selecionado: boolean;
    aoSelecionar: () => void
}

const Estrela = ({ selecionado = false, aoSelecionar }: EstrelaProps) => {
    
    return (
        <FaStar 
            color={ selecionado ? 'yellow' : 'grey'} 
            onClick={aoSelecionar}
        />
    )
}

export default Estrela;
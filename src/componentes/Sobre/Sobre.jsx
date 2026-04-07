// Componentes
import SobreTexto from "./SobreTexto"
import Habilidades from "./Habilidades"

function Sobre() {
    return (
        <>
            <section className="conteudo-escondido info-container" id="informacoes">
                <div className="info-box" >
                    <SobreTexto />
                    <Habilidades />
                </div>   
            </section>
        </>
    )
}   

export default Sobre
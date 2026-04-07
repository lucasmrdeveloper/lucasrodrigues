// CSS
import "../../styles/layout/contatos.css"

// Componente
import ContatoSocial from "./ContatoSocial"

// Icon
import Linkedin from "../../icons/Contatos/Linkedin"
import Email from "../../icons/Contatos/Email"
import Github from "../../icons/Contatos/Github"


function Contatos() {
    return(
        <>
            <section id="contatos" className="conteudo-escondido contatos-container">
                <div className="contatos-box">
                    <h1 className="contatos-titulo">Contatos</h1>

                    <div className="contatos-redes">
                        <ContatoSocial 
                            rede="Linkedin"
                            link="https://www.linkedin.com/in/lucasrodriguesmr"
                            icon={Linkedin}
                        /> 

                        <ContatoSocial 
                            rede="GitHub"
                            link="https://github.com/lucasmrdeveloper"
                            icon={Github}
                        />

                        <ContatoSocial 
                            rede="Email"
                            link="lucasrodrigues.mr@gmail.com"
                            icon={Email}
                        /> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contatos
import "../../styles/layout/sobre.css"

function SobreTexto() {
    return(
        <>
            <div id="sobre" className="sobre">
                <h1 className="sobre-titulo">Sobre mim</h1>

                <img className="sobre-img" src="imgs/home/home.png" alt="Sobre"/>

                <div className="sobre-conteudo">
                    <p className="sobre-texto">
                        Sou desenvolvedor front-end focado na criação de sites, sistemas web e interfaces.
                    </p>
    
                    <p className="sobre-texto">
                        Tenho experiência prática no desenvolvimento com React,
                        Javascript, HTML, CSS e Wordpress.
                    </p>

                     <p className="sobre-texto">
                        Atualmente, meu foco está no desenvolvimento de sistemas web mais completos, aprofundando meus conhecimentos em React, Javascript moderno e integrações com APIs.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SobreTexto
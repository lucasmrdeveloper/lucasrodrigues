// Icons
import React from "../../icons/Habilidades/React"
import Js from "../../icons/Habilidades/Js"
import Html from "../../icons/Habilidades/Html"
import Css from "../../icons/Habilidades/Css"


function PortfolioProjeto( {titulo, descricao, src, repositorio, projeto} ) {
    let stack

    if (titulo === "JS Debug") {
        stack = 
        <>
            <React />
            <Js />
            <Html />
            <Css />
        </>
    }
    else {
        stack = 
        <>
            <Js />
            <Html />
            <Css />
        </>
    }

    return(
        <>
            <div className="portfolio-projeto">
                <img className="portfolio-img" src={src} alt="Lista de tarefas"/>
            
                <div className="portfolio-sobre">
                    <h1 className="portfolio-sobre-titulo">{titulo}</h1>

                    <p className="portfolio-descricao">
                        {descricao}
                    </p>

                    <div className="portfolio-links">
                        <a className="portfolio-link" href={projeto}>Acessar Projeto</a>
                        <a className="portfolio-link" href={repositorio}>Acessar Repositório</a>
                    </div>

                    <div className="portfolio-stack">
                        <h3 className="portfolio-stack-titulo">Tecnologias Utilizadas</h3> 

                        <div className="portfolio-stack-itens">
                            {stack}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PortfolioProjeto
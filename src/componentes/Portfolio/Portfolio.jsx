// Componente
import PortfolioProjeto from "./PortfolioProjeto"

// CSS
import "../../styles/layout/portfolio.css"

// Imgs
import jsdebug from "../../assets/portfolio/js-debug.png"
import listatarefas from "../../assets/portfolio/lista-de-tarefas.png"


function Portfolio() {
    return(
        <>
            <section id="portfolio" class="conteudo-escondido portfolio-container">
                <div class="portfolio-box">
                    <h1 class="portfolio-titulo">Portfólio</h1>

                    <div class="portfolio-projetos">
                        <PortfolioProjeto
                            titulo="JS Debug"
                            descricao="É uma aplicação para criar console.log personalizados de forma visual, facilitando a leitura e organização de logs durante o desenvolvimento em Javascript."
                            src={jsdebug}
                            repositorio="https://github.com/lucasmrdeveloper/JS-Debug"
                            projeto="https://js-debug.vercel.app/"
                        />

                        <PortfolioProjeto
                            titulo="Lista de Tarefas"
                            descricao="Este projeto é uma aplicação de gerenciamento de tarefas, oferecendo uma interface intuitiva e amigável para os usuários controlarem suas atividades diárias."
                            src={listatarefas}
                            repositorio="https://github.com/lucasmrdeveloper/to-do"
                            projeto="https://lucasmrdeveloper.github.io/to-do/"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
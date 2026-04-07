// Componente
import PortfolioProjeto from "./PortfolioProjeto"

// CSS
import "../../styles/layout/portfolio.css"

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
                            src="../src/assets/portfolio/js-debug.png"
                            repositorio="https://github.com/lucasmrdeveloper/JS-Debug"
                            projeto="https://js-debug.vercel.app/"
                        />

                        <PortfolioProjeto
                            titulo="Lista de Tarefas"
                            descricao="Este projeto é uma aplicação de gerenciamento de tarefas, oferecendo uma interface intuitiva e amigável para os usuários controlarem suas atividades diárias."
                            src="../src/assets/portfolio/lista-de-tarefas.png"
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
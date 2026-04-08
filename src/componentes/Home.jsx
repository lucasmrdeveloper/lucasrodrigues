// CSS
import "../styles/layout/home.css"

// Componente
import Header from "./Header/Header"

// Img
import desenvolvedor from "../assets/home/desenvolvedor.jpg"


function Home() {
    return(
        <>
            <Header />

            <section className="conteudo-escondido home-container">
                <div className="home-box">
                    <img className="home-img" src={desenvolvedor} alt="Desenvolvedor"/>

                    <h1 className="home-nome">Lucas Rodrigues</h1>

                    <h3 className="home-profissao">Desenvolvedor Front-end</h3>

                    <a className="home-btn-link" href="#contatos">Contato</a>
                </div>
            </section>
        </>
    )
}

export default Home
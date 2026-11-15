// CSS
import "./Home.css"

// Componente
import Header from "../Header/Header"

// Img
import desenvolvedor from "../../assets/home/desenvolvedor.jpg"


function Home() {
    return(
        <>
            <Header />

            <section className="home-container">
                <div className="home-box">
                    <img className="home-img" src={desenvolvedor} alt="Desenvolvedor"/>

                    <h1 className="home-nome">Lucas Rodrigues</h1>

                    <h3 className="home-profissao">Desenvolvedor Front-end</h3>

                    <div className="home-btns">
                        <a className="home-btn" href="#contatos">Ver projetos</a>
                        <a className="home-btn" href="#contatos">Contato</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
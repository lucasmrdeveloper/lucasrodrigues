// CSS
import "./Home.css"

// Img
import desenvolvedor from "../../assets/home/desenvolvedor.jpg"


function Home() {
    return(
        <section className="home-container">
            <div className="home-box">
                <img className="home-img" src={desenvolvedor} alt="Desenvolvedor"/>

                <h1 className="home-nome">Lucas Rodrigues</h1>

                <h3 className="home-profissao">Desenvolvedor Front-end | JavaScript | React | TypeScript</h3>

                <div className="home-btns">
                    <a className="home-btn" href="#contatos">Ver projetos</a>
                    <a className="home-btn" href="#contatos">Contato</a>
                </div>
            </div>
        </section>
    )
}

export default Home
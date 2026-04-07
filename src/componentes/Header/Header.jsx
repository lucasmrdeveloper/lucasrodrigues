// CSS
import "../../styles/layout/header.css"

// Componente
import Logo from "../../icons/Logo"

// Hook
import { useRef, useState } from "react"

// Imgs
import imgAbrir from "../../assets/home/menu-rwd/menu-rwd-abrir.svg"
import imgFechar from "../../assets/home/menu-rwd/menu-rwd-fechar.svg"


function Header() {
    const [menu, setMenu] = useState(false)
    const btnAbrir = useRef(null)
 
    
    function abrir() {
        if (menu === false) {
            setMenu(true)
        }
        else {
            setMenu(false)
        }
    }

    return(
        <>  
            <header className="conteudo-escondido header-container">
                <div className="header-box">
                    <div className="header-logo-box">
                        <Logo />
                        <h3 className="header-logo-nome">Lucas Rodrigues</h3>

                    </div>

                    <img 
                        className="header-menu-rwd-btn" 
                        src={menu === false ? imgAbrir : imgFechar}
                        alt="Botão abrir e fechar menu mobile" 
                        ref={btnAbrir}
                        onClick={abrir}
                    />

                    <nav className={menu ? "header-menu-visivel" : "header-categorias-box"}>
                        <ul className="header-categorias">
                            <li className="header-categoria">
                                <a id="" className="header-categoria-link" href="#informacoes">Sobre</a>
                            </li>
                            <li className="header-categoria">
                                <a id="" className="header-categoria-link" href="#informacoes">Habilidades</a>
                            </li>
                            <li className="header-categoria">
                                <a id="" className="header-categoria-link" href="#portfolio">Projetos</a>
                            </li>
                            <li className="header-categoria">
                                <a id="" className="header-categoria-link" href="#contatos">Contatos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
// CSS
import "../../styles/layout/habilidades.css"

// Componente
import HabilidadeItem from "./HabilidadeItem"

// Icons
import Html from "../../icons/Habilidades/Html"
import Css from "../../icons/Habilidades/Css"
import React from "../../icons/Habilidades/React"
import Js from "../../icons/Habilidades/Js"
import Tailwind from "../../icons/Habilidades/Tailwind"
import Sass from "../../icons/Habilidades/Sass"
import Git from "../../icons/Habilidades/Git"
import Wordpress from "../../icons/Habilidades/Wordpress"


function Habilidades() {
    return(
        <>
            <div id="habilidades"  className="habilidades">
                <h1 className="habilidades-titulo">Habilidades</h1>

                <div className="habilidades-box">
                    <div className="habilidades-icones">
                        <HabilidadeItem>
                            <Html />
                        </HabilidadeItem>
                        
                        <HabilidadeItem >
                            <Css />
                        </HabilidadeItem>

                        <HabilidadeItem>
                            <Js />
                        </HabilidadeItem>

                        <HabilidadeItem>
                            <React />
                        </HabilidadeItem>

                        <HabilidadeItem>
                            <Tailwind />
                        </HabilidadeItem>

                        <HabilidadeItem>
                            <Sass />
                        </HabilidadeItem>
                
                        <HabilidadeItem>
                            <Git />
                        </HabilidadeItem>

                        <HabilidadeItem>
                            <Wordpress />
                        </HabilidadeItem>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Habilidades
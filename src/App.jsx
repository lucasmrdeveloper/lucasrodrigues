// Componentes
import Header from './componentes/Header/Header'
import Home from './componentes/Home'
import Sobre from "./componentes/Sobre/Sobre"
import Portfolio from './componentes/Portfolio/Portfolio'
import Contatos from './componentes/Contatos/Contatos'

// CSS
import "./styles/base/reset.css"
import "./styles/base/base.css"


function App() {
  return (
    <>
      <Home />
      <Sobre />
      <Portfolio />
      <Contatos />
    </>
  )
}

export default App

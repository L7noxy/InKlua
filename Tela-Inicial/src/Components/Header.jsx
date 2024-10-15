import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <header className="Header">
      <input type="text" className="Input" placeholder="Buscar"/> 
      <Link to="sobre" className="sobre">Sobre</Link>
      <div className='parte-branca'></div>
    </header>
  )
}

export default Header
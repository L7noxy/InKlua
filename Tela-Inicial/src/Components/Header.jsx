import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <header className="Header">
      <p>teste</p>
        <Link to="/">Home</Link>
        <br />
        <br /><br /><br />  
        <Link to="sobre">Sobre</Link>
    </header>
  )
}

export default Header
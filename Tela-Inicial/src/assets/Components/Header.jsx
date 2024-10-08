import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  return (
    <nav className="Header">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
    </nav>
  )
}

export default Header
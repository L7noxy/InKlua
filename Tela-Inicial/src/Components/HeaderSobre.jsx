import React from 'react'
import { Link } from "react-router-dom"
import './HeaderSobre.css'

function HeaderSobre() {
  return (
    <header className="Header">
      <input type="text" className="Input" placeholder="Buscar"/>

      <Link to="/" className='entrar'>Entrar</Link>      
      <div className='parte-branca'></div>
    </header>
  )
}

export default HeaderSobre

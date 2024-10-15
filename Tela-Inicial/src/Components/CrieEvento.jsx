import React from 'react'

function CrieEvento() {
  return (
    <header className="Header">
      <input type="text" className="Input" placeholder="Buscar"/> 
      <Link to="sobre" className="sobre">Sobre</Link>
      <div className='parte-branca'></div>
    </header>
  )
}

export default CrieEvento
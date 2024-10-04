import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='nav-bar'>

        <nav className='nav-links'>

          <a href="#" className='crie-evento'> Crie seu evento</a>
          <a href="#" className='cadastro'>Cadastro</a>
          <a href="#" className='entrar'>Entrar</a>


        </nav>
        <div className='parte-branca'></div>        
        <img src="./img/logo2.png" className='logo-pequena' />
        <img src="./img/logo.png" className='img-logo' />


      </div>

      <img src="./img/cartaz.png" className='Cartaz-primario' />

    </div>
  )
}

export default Navbar

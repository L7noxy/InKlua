import { useState } from 'react';
import './App.css';
import Infos from './assets/Components/Infos';
import Navbar from './assets/Components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Infos />
      </div>
    </>
  )
}

export default App

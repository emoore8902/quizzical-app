import { useState } from 'react'

import './App.css'

import Welcome from './components/Welcome'
import StartGame from './components/StartGame'

import yellowBlock from './imgs/yellow-block.png'
import blueBlock from './imgs/blue-block.png'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startNewGame = () => {
    setIsGameStarted(true)
  }
  const returnToWelcomePage = () => {
    setIsGameStarted(false)
  }

  return (
    <div className="App">
      <img src={yellowBlock} className="app-yellow-block" />
      <img src={blueBlock} className="app-blue-block" />
      <div className="app-content">
        { isGameStarted ? <StartGame returnToWelcomePage={returnToWelcomePage} /> : <Welcome startNewGame={startNewGame} />  }
      </div>
      
    </div>
  )
}

export default App
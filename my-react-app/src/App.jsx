import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tarefa from './componentes/tarefas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <tarefa/>   
    </>
  )
}

export default App

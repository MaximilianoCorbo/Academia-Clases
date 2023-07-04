import './App.css'
import Cuadrado from './components/cuadrado/Cuadrado'

function App() {
  return(
    <div className='contenedor'>
      <Cuadrado colorInicial="red" />
      <Cuadrado colorInicial="blue" />
      <Cuadrado colorInicial="orange" />
      <Cuadrado colorInicial="green" />
    </div>
  )
}

export default App

import './App.css'
import { NavBar } from './components/NavBar'
import Home from './pages/Home'
import { MainRouter } from './router/MainRouter'



function App() {
  
  return (
    <>
    <NavBar/>
    <MainRouter/>
    <Home/>
    
    </>
  )
}

export default App

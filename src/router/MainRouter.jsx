import {Route, Routes} from "react-router-dom"

import { Menu } from "../pages/Menu"
import { About } from "../pages/About"
import { Reserva } from "../pages/Reserva"
import Pagenotfound from "../pages/Pagenotfound"
import Home from "../pages/Home"
import Contacto from "../pages/Contacto"
import { Login } from "../pages/Login"
import { Panelreservas } from "../pages/Panelreservas"
import { Panelmenu } from "../pages/Panelmenu"


export const MainRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/reserva" element={<Reserva/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/*" element={<Pagenotfound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/panel" element={<Panelreservas/>}/>
        <Route path="/panelmenu" element={<Panelmenu/>}/>
        
    </Routes>
  )
}

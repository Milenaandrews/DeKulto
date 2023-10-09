import Logo from "../assets/images/Logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./NavBar.css"
import { useRef } from "react";


export const NavBar = () => {

  const searchRef = useRef();
  const navbarRef = useRef();
  
  const searchHandler = () =>{
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    };
  const navbarHandler = () =>{
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active")
    };

  return (
    <header className="header">
         <a href="#" className="logo"><img src={Logo} alt="" /></a>  
        <nav className="navbar" ref={navbarRef}>
            <a href="/">Home</a>
            <a href="/about">Nosotros</a>
            <a href="/menu">Carta</a>
            <a href="/reserva">Reservas</a>
            <a href="/contacto">Contacto</a>
        </nav>
        <div className="icon">
          <div><SearchIcon fontSize="large" className="search" onClick={searchHandler}/></div>
          <div ><MenuIcon className="menu" id="menu-btn" onClick={navbarHandler}/></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search Here" id="search-box" />
          <label htmlFor="search-box" className="search"><SearchIcon fontSize="large" /></label>
        </div>
    </header>
  )
}

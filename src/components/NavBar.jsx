import Logo from "../assets/images/Logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import "./NavBar.css"
import { useRef } from "react";
import { NavLink } from "react-router-dom";


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
  
  const navlinkHandler = ()=>{
    navbarRef.current.classList.remove("active");
    searchRef.current.classList.remove("active")

  }

  return (
    <header className="header">
         <NavLink to="/" className="logo"><img src={Logo} alt="" /></NavLink>  
        <nav className="navbar" ref={navbarRef}>
            <NavLink to="/" onClick={navlinkHandler}>Home</NavLink>
            <NavLink to="/about" onClick={navlinkHandler}>Nosotros</NavLink>
            <NavLink to="/menu" onClick={navlinkHandler}>Carta</NavLink>
            <NavLink to="/reserva" onClick={navlinkHandler}>Reservas</NavLink>
            <NavLink to="/contacto" onClick={navlinkHandler}>Contacto</NavLink>
        </nav>
        <div className="icon">
          {/* <div><SearchIcon fontSize="large" className="search" onClick={searchHandler}/></div> */}
          <div ><MenuIcon className="menu" id="menu-btn" onClick={navbarHandler}/></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="Search Here" id="search-box" />
          <label htmlFor="search-box" className="search"><SearchIcon fontSize="large" /></label>
        </div>
    </header>
  )
}

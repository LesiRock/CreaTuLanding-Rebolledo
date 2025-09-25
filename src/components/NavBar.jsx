import "../css/NavBar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
import { CartContext} from "../context/CartContext"

const NavBar = () => {

    return(
        <nav className='nav-container'>
            <NavLink to='/'>
                <img alt='logo' src='../escudo.png'className='logo'/>
            </NavLink>
            {/*<a className='anchor-nav'>Nosotros</a>
            <a className='anchor-nav'>Proyecto</a>
            <a className='anchor-nav'>Contacto</a>*/}
            <div className="dropdown">
                <a className="anchor-nav dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Mercancia</a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                    <NavLink to='/category/playera'className="dropdown-item" href="#">Playeras</NavLink>
                    <NavLink to='/category/sudadera' className="dropdown-item" href="#">Sudaderas</NavLink>
                    <NavLink to='/category/taza' className="dropdown-item" href="#">Tazas</NavLink>
                    <NavLink to='/category/gorra'className="dropdown-item" href="#">Gorras</NavLink>
                </ul>
            </div>
            <NavLink className='anchor-nav' to='/cart'><CartWidget /></NavLink>
        </nav>
    )
}
export default NavBar
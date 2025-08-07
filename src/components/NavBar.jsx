import "../css/NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className='nav-container'>
            <img alt='logo' src='../escudo.png'className='logo'/>
            <a className='anchor-nav'>Nosotros</a>
            <a className='anchor-nav'>Proyecto</a>
            <a className='anchor-nav'>Contacto</a>
            <a className='anchor-nav'>Mercancia<CartWidget/></a>
        </nav>
    )
}
export default NavBar
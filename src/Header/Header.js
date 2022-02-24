import { Link } from "react-router-dom";
import './Header.css';
import Home from '../media/Home.png';

const Header = () => {

    const setActive = (event) => {
        event.preventDefault();
        [event.target, document.querySelector('.active')].forEach(elem => {
            if (elem) elem.classList.toggle('active');
        });
    }

    return (
        <nav className="header" onClick={setActive}>
            <Link className="nav" to="/"><img src={Home} id="home-png" alt="" /></Link>
            <Link className="nav" to="/news">News</Link>
            <Link className="nav" to="/tournaments">Tournaments</Link>
            <Link className="nav" to="/fighters">Fighters</Link>
            <Link className="nav" to="/rating">Rating</Link>
            <Link className="nav" to="/media">Media</Link>
            <Link className="nav" to="/about">About</Link>
        </nav>
    )

}

export default Header;
import { Link } from "react-router-dom";
import logo from "../../assets/greydive-encuesta.png";

import "./Header.styles.css";

const Header = () => {
    return ( 
        <header>          
            <nav className="header__nav">
                <Link to="/">
                    <img className="header__nav--logo" src={logo} alt="logo-encuesta"/>
                </Link>
                <Link className="header__nav--result" to="resultDate"> Resultados del formulario</Link>
            </nav>
        </header>
     );
}
 
export default Header;
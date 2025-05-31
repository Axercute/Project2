import {Link} from "react-router"
import "./NavBar.css"

const NavBar = () => {

    return (<>
    <nav>
    <ul>
    <li>
    <Link path to ="/">
    Home
    </Link>
    </li>

    <li>
    <Link path to ="/songSearch">
    Song Search
    </Link>
    </li>

    <li>
    <Link path to ="/singerSearch">
    Singer Search
    </Link>
    </li>
    
    <li>
    <Link path to ="/singerLogin">
    Singer Login
    </Link>
    </li>

    <li>
    <Link path to ="/contactUs">
    Contact Us
    </Link>
    </li>

    </ul>
    </nav>
    </>)
}
export default NavBar
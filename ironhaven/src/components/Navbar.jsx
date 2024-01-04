import { Link } from "react-router-dom"
import { routes } from "../data"
import './Navbar.css'
import logo from '../images/logo.png'
export default function Navbar() {

    return <nav>

        <div className="container nav__container">

            <Link className="logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <ul className="nav_links">
                {routes.map((item, index) => {
                    return <li><Link to={item.path} key={index}>{item.component}</Link></li>
                })}
            </ul>
        </div>
    </nav>
}
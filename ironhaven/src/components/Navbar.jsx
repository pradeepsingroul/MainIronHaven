import { Link, NavLink } from "react-router-dom"
import { routes } from "../data"
import './Navbar.css'
import logo from '../images/logo.png'


export default function Navbar() {

    return <nav>

        <div className="container nav__container">

            <Link className="logo" to="/">
                <img src={logo} alt="" />
            </Link>
            <ul className="nav__links">
                {routes.map((item, index) => {
                    return <li><NavLink to={item.path} className={({isActive})=> isActive ? 'active-nav' : ''} key={index}>{item.component}</NavLink></li>
                })}
            </ul>
        </div>
    </nav>
}
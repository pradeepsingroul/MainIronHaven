import { Link, NavLink } from "react-router-dom"
import { routes } from "../data"
import {TiThMenu} from 'react-icons/ti'
import './Navbar.css'
import logo from '../images/logo.png'
import { useState } from "react"


export default function Navbar() {

    const [isShowing,setIsShowing] = useState(false)

    return <nav>

        <div className="container nav__container">

            <Link className="logo" to="/">
                <img src={logo} alt="" />
            </Link>
            {!isShowing ? <ul className="nav__links">
                {routes.map((item, index) => {
                    return <li><NavLink to={item.path} className={({isActive})=> isActive ? 'active-nav' : ''} key={index}>{item.component}</NavLink></li>
                })}
            </ul> : null}
            <button className="nav__toggle-btn" onClick={()=> setIsShowing(!isShowing)}><TiThMenu/></button>
            
        </div>
    </nav>
}
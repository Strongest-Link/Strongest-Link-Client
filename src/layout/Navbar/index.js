import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../images/sl-logo.png'

const Navbar = () => {
    return (
        <nav >
            <NavLink exact to="/" activeClassName="active"><img
                src={logo}
                alt="Logo"
                className="nav-icon"
            />
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="nav-link right-link">About</NavLink>
            <NavLink to="/SPA" activeClassName="active" className="nav-link">Game</NavLink>
            <NavLink to="/leaderboard" activeClassName="active" className="nav-link">Leaderboard</NavLink>
        </nav>
    )
}

export default Navbar

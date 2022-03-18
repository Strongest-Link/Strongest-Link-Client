import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../../images/sl-logo.png'

const Navbar = () => {
    return (
        <nav role="nav">
            <NavLink exact to="/" activeClassName="active"><img
                src={logo}
                alt="Logo"
                className="nav-icon"
            />
            </NavLink>
            <NavLink to="/create-lobby" activeClassName="active" className="nav-link right-link">Create Lobby</NavLink>
            <NavLink to="/join-lobby" activeClassName="active" className="nav-link">Join Lobby</NavLink>
            <NavLink to="/leaderboard" activeClassName="active" className="nav-link">Leaderboard</NavLink>
            <NavLink to="/SPA" activeClassName="active" className="nav-link">SPA</NavLink>
        </nav>
    )
}

export default Navbar

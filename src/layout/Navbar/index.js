import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <nav >
            <NavLink exact to="/" activeClassName="active"><img
                src="#"
                alt="Logo"
                className="nav-icon"
            />
            </NavLink>
            <NavLink to="/create-lobby" activeClassName="active" className="nav-link">Create Lobby</NavLink>
            <NavLink to="/join-lobby" activeClassName="active" className="nav-link">Join Lobby</NavLink>
            <NavLink to="/leaderboard" activeClassName="active" className="nav-link">Leaderboard</NavLink>
        </nav>
    )
}

export default Navbar

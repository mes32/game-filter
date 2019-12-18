import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header>
            <h1>game-filter:~$ █ </h1>
            <div className="links-div">
                <Link to="/search">Search Games</Link>
                <Link to="/cart">Shopping Cart</Link>
            </div>
        </header>
    );
}

export default Navbar;

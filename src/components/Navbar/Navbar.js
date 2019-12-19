import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Navbar.css';

function Navbar({ cart }) {

    const cartSpan = () => {
        if (cart.length > 0) {
            return (
                <span> ({cart.length})</span>
            );
        }
    }

    return (
        <header className="navbar">
            <div className="navbar-flex">
                <h1>game-filter:~$ _ </h1>
                <div className="links-div">
                    <Link to="/search">Search Games</Link>
                    <Link to="/cart">Shopping Cart{cartSpan()}</Link>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps)(Navbar);

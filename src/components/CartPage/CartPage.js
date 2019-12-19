import React from 'react';
import { connect } from 'react-redux';
import CartEntry from '../CartEntryRow/CartEntryRow';
import './CartPage.css';

function CartPage({ cart }) {
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? <p>[ Your cart is empty ]</p> :
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Game Title</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((game, i) => <CartEntry key={i} game={game} index={i} />)}
                    </tbody>
                </table>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartPage);
import React from 'react';
import { connect } from 'react-redux';
import CartEntry from '../CartEntryRow/CartEntryRow';
import './CartPage.css';

function CartPage({ cart, dispatch }) {
    const checkout = () => {
        dispatch({ type: 'CLEAR_CART_ITEMS' });
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? <p>[ Your cart is empty ]</p> :
                <>
                    <button onClick={checkout}>Checkout (i.e. delete all)</button>
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
                </>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartPage);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../../classes/Game';

import './CartEntryRow.css';

function CartEntry(props) {
    const game = props.game;

    const removeEntry = () => {
        props.dispatch({ type: 'REMOVE_CART_ITEM', payload: props.index });
    }

    return (
        <tr className="cart-entry-row">
            <td>{game.iconImage && <img src={game.iconImage} alt=""></img>}</td>
            <td>{game.name}</td>
            <td><button onClick={removeEntry}>Remove</button></td>
        </tr>
    );
}

CartEntry.propTypes = {
    index: PropTypes.number,
    game: PropTypes.instanceOf(Game)
};

export default connect()(CartEntry);
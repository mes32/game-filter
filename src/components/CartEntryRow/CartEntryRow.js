import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Game from '../../classes/Game';

function CartEntry(props) {
    const game = props.game;

    const removeEntry = () => {
        props.dispatch({ type: 'REMOVE_CART_ITEM', payload: props.index });
    }

    return (
        <tr>
            <td>{game.iconImage && <img src={game.iconImage} alt=""></img>}</td>
            <td>{game.name}</td>
            <td><button onClick={removeEntry} className="remove-button">Remove</button></td>
        </tr>
    );
}

CartEntry.propTypes = {
    index: PropTypes.number.isRequired,
    game: PropTypes.instanceOf(Game).isRequired
};

export default connect()(CartEntry);
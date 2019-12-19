import React from 'react';
import PropTypes from 'prop-types';
import Game from '../../classes/Game';

function GameCard(props) {
    return (
        <div>
            <h3>{props.game.name}</h3>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Game)
};

export default GameCard;
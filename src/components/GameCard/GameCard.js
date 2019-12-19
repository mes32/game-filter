import React from 'react';
import PropTypes from 'prop-types';
import Game from '../../classes/Game';

import './GameCard.css';

function GameCard(props) {
    const game = props.game;

    return (
        <div className="game-card">
            <h3>{game.name}</h3>
            {game.releaseDate && <h4>Release date: {game.formatReleaseDate()}</h4>}
            {game.description && <p>{game.description}</p>}
            {game.url && <p>(<a href={game.url}>more</a>)</p>}
            {game.image && <img src={game.image} alt="game artwork" ></img>}
            <button>Rent a Copy</button>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.instanceOf(Game)
};

export default GameCard;
import React from 'react';
import { connect } from 'react-redux';

import GameCard from '../GameCard/GameCard';
import SearchPanel from '../SearchPanel/SearchPanel';

function SearchPage(props) {
    return (
        <div>
            <h1>Search Games</h1>
            <SearchPanel />
            {props.games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
    );
}

const mapStateToProps = (state) => ({
    games: state.games
});

export default connect(mapStateToProps)(SearchPage);
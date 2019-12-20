import React, { useState } from 'react';
import { connect } from 'react-redux';
import LinkButton from '../LinkButton/LinkButton';
import './SearchPanel.css';

const DEFAULT_GAME_TITLE = '';
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 10;

function SearchPanel(props) {
    const [gameTitle, setGameTitle] = useState(DEFAULT_GAME_TITLE);
    const [offset, setOffset] = useState(DEFAULT_OFFSET);
    const [limit, setLimit] = useState(DEFAULT_LIMIT);

    const searchGames = () => {
        if (gameTitle) {
            props.dispatch({
                type: 'SEARCH_GAMES', 
                payload: { 
                    name: gameTitle,
                    offset: offset,
                    limit: limit
                }
            });
        }
    }

    const handleTitleChange = (event) => {
        setGameTitle(event.target.value);
    }

    const handleLimitChange = (newLimit) => () => {
        setLimit(newLimit);
    }

    const pageBack = () => {
        setOffset(0);
        searchGames();
    }

    const pageForward = () => {
        setOffset(0);
        searchGames();
    }

    const submitSearch = (event) => {
        event.preventDefault();
        searchGames();
    }

    return (
        <div className="search-panel">
            <form onSubmit={submitSearch}>
                <div className="search-bar-div">
                    <input id="search-bar" type="text" onChange={handleTitleChange} value={gameTitle} placeholder="Game Title" />
                    <input type="submit" value="Search" />
                </div>
                <p>Results per page: <LinkButton value="1" selected={limit === 1} onClick={handleLimitChange(1)} /> | <LinkButton value="10" selected={limit === 10} onClick={handleLimitChange(10)} /> | <LinkButton value="20" selected={limit === 20} onClick={handleLimitChange(20)} /> | <LinkButton value="100" selected={limit === 100} onClick={handleLimitChange(100)} /></p>
                {props.games.length > 0 &&
                    <p>Showing <b>1</b> - <b>10</b> of <b>16</b> results <LinkButton value="&lt;Previous" onClick={pageBack} /> | <LinkButton value="Next&gt;" onClick={pageForward} /></p>
                }
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({
    games: state.games
});

export default connect(mapStateToProps)(SearchPanel);
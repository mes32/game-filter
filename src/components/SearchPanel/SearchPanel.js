import React, { useState } from 'react';
import { connect } from 'react-redux';
import './SearchPanel.css';

const DEFAULT_GAME_TITLE = '';

function SearchPanel(props) {
    const [gameTitle, setGameTitle] = useState(DEFAULT_GAME_TITLE);

    const searchGames = () => {
        if (gameTitle) {
            props.dispatch({
                type: 'SEARCH_GAMES', 
                payload: { 
                    name: gameTitle
                }
            });
        }
    }

    const handleTitleChange = (event) => {
        setGameTitle(event.target.value);
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
            </form>
        </div>
    );
}

export default connect()(SearchPanel);
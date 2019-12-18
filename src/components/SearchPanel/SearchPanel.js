import React from 'react';
import { connect } from 'react-redux';
import './SearchPanel.css';

function SearchPanel(props) {
    return (
        <div className="search-panel">
            <form>
                <div className="search-bar-div">
                    <input id="search-bar" type="text" placeholder="Game Title" />
                    <input type="submit" value="Search" />
                </div>
            </form>
        </div>
    );
}

export default connect()(SearchPanel);
import React from 'react';
import { connect } from 'react-redux';

import SearchPanel from '../SearchPanel/SearchPanel';

function SearchPage() {
    return (
        <div>
            <h1>Search Games</h1>
            <SearchPanel />
        </div>
    );
}

export default connect()(SearchPage);

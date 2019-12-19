import { combineReducers } from 'redux';

import cart from './cart';
import games from './games';

const rootReducer = combineReducers({
    cart,
    games
});

export default rootReducer;

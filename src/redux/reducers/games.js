const DEFAULT_STATE = [];

const games = (state = DEFAULT_STATE, action) => {
    if (action.type === 'SET_GAMES') {
        return action.payload;
    } else {
        return state;
    }
}

export default games;
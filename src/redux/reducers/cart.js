const DEFAULT_STATE = [];

const games = (state = DEFAULT_STATE, action) => {
    if (action.type === 'ADD_CART_ITEM') {
        const itemToAdd = action.payload;
        return [...state, itemToAdd];
    } else if (action.type === 'REMOVE_CART_ITEM') {
        const indexToRemove = action.payload;
        const nextState = [...state];
        nextState.splice(indexToRemove, 1);
        return nextState;
    } else if (action.type === 'CLEAR_CART_ITEMS') {
        return DEFAULT_STATE;
    } else {
        return state;
    }
}

export default games;
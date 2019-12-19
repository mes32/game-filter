import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* searchGames(action) {
    const params = {
        name: action.payload.name
    };
    try {
        const response = yield axios.get('/api/games', { params });
        yield console.log(response.data);
    } catch (error) {
        const errorMessage = `Unable to search games on Giant Bomb. ${error}`;
        console.error(errorMessage);
        alert(errorMessage);
    }
}

function* gamesSaga() {
    yield takeLatest('SEARCH_GAMES', searchGames);
}

export default gamesSaga;
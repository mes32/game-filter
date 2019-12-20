import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import Game from '../../classes/Game';

function* searchGames(action) {
    yield console.log(action.payload);
    const params = {
        name: encodeURI(action.payload.name)
    };
    try {
        const response = yield axios.get('/api/games', { params });
        const games = yield response.data.map(object => new Game(object));
        yield put({ type: 'SET_GAMES', payload: games });
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
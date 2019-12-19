import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// const API_KEY = process.env.API_KEY;

function* fetchGames() {
    yield console.log('in fetchGames()');
    // yield console.log(API_KEY);
    console.log(process.env.REACT_APP_API_KEY)
}

function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames);
}

export default gamesSaga;
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Setup middleware
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
const sagaMiddleware = createSagaMiddleware();

const middlewareArray = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareArray)
);

sagaMiddleware.run(rootSaga);

// Render the root application
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {createStore, combineReducers} from 'redux';
import slideshow from './reducers/slideshow';
import paused from './reducers/leap-is-paused';
import {Provider} from 'react-redux';
import generateLeapLoop from './leap-loop';

const mainReducer = combineReducers({slideshow, paused});

const mainStore = createStore(mainReducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined);

const node = document.getElementById('app-node');

const render = () => ReactDOM.render((
  <Provider store={mainStore}>
    <App/>
  </Provider>
), node);

mainStore.subscribe(render);
render();

const leapLoop = generateLeapLoop(mainStore);
leapLoop.start();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import {createStore, combineReducers} from 'redux';
import slideshow from './reducers/slideshow';
import {Provider} from 'react-redux';

const mainReducer = combineReducers({slideshow});

const mainStore = createStore(mainReducer);

const node = document.getElementById('app-node');

const render = () => ReactDOM.render((
  <Provider store={mainStore}>
    <App/>
  </Provider>
), node);

mainStore.subscribe(render);
render();

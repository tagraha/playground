import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './App/redux/store';
import {BrowserRouter} from 'react-router-dom'

import { App } from './App/containers';

window.onload = () => {
    ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>,
        document.getElementById('app')
    );
};
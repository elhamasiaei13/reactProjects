import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import fa from 'react-intl/locale-data/fa';
import en from 'react-intl/locale-data/en';
import persian from './language/persian';
import english from './language/english';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reducer from "./store/Reducer";
import { Provider } from 'react-redux';

addLocaleData([...fa, ...en]);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Rootreducer = combineReducers({
    Reducer: Reducer,
})
const store = createStore(Rootreducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store} >

    <IntlProvider locale={'fa'} messages={persian}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </IntlProvider>
    </Provider>

    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

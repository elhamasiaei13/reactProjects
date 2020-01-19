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
// import english from './language/english';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import Reducer from "./store/Reducer";
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/integration/react'

addLocaleData([...fa, ...en]);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Rootreducer = combineReducers({
    Reducer: Reducer,
})

const persistConfig = {

    key:"root",
    storage,
}

const persisteReducer = persistReducer(persistConfig, Rootreducer)

const store = createStore(persisteReducer);

// const store = createStore(
//     persistRootReducer,
//     composeEnhancers(applyMiddleware(
//       apiAuthErrorMiddleware,
//       // apiGenericErrorMiddleware,
//       thunk))
//   );

// const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store} >
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <IntlProvider locale={'fa'} messages={persian}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </IntlProvider>
        {/* </PersistGate> */}
    </Provider>

    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

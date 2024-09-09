import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore , combineReducers , applyMiddleware } from 'redux'
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import {accountReducer} from './redducers/account.js'
import { bonusReducer } from './redducers/bonus.js'

import {Provider} from 'react-redux'

const store = createStore(
  combineReducers({account:accountReducer ,
                       bonus : bonusReducer}) ,
                        applyMiddleware(logger , thunk));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App store = {store} /> */}

    {/* react-redux ki librray provider  */}
    <Provider store = {store}>
    <App />
    </Provider>


  </StrictMode>,
)

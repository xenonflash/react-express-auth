import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, reduxLogger)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

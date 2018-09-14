import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.min.css'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Navbar from './components/Navbar'
import { BrowserRouter as Router} from 'react-router-dom'
import routes from './routes'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, reduxLogger)))


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Navbar/>
        { routes }
      </div>
    </Router>
  </Provider>, document.getElementById('root'));

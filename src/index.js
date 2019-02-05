import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './reducers/reduser';
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Cities from './Cities';
import App from './App';




const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
              <div>
              <Route exact path="/" component={App}/>
              <Route path="/cities" component={Cities} />
             
              </div>
            </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


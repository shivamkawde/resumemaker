import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,combineReducers} from "redux"
import {userReducer,tamplateReducer,detailReducer} from "./redux/reducers"
import{Provider} from "react-redux"

let rootReducers=combineReducers({
  tamplate:tamplateReducer,
  userReducer:userReducer,
  details:detailReducer
})
let store=createStore(rootReducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

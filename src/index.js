import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Redux/Reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const reduxStore=createStore(rootReducer,composeWithDevTools());
ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
    <App />
    </Provider>
     
  
    </BrowserRouter>
,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import {createStore,applyMiddleware} from 'redux'
import rootReducer from '../src/Redux/Reducer/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import thunk from 'redux-thunk';
import {getFirestore,reduxFirestore} from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
//import { ReactReduxFirebaseProvider, getFirebase, reduxFirestore, getFirestore, createFirestoreInstance} from 'react-redux-firebase';


const firebaseConfig = {
  apiKey: "AIzaSyA-cou3FuFBC45kR5dMx2W6rwZHA025DRU",
  authDomain: "resume-35000.firebaseapp.com",
  projectId: "resume-35000",
  storageBucket: "resume-35000.appspot.com",
  messagingSenderId: "177482972165",
  appId: "1:177482972165:web:6e62e4fe2e468a8cf1f06c"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();

const reduxStore= createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),reduxFirestore(firebase)) ) //binding for redux to get firestore

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>
,
  document.getElementById('root')
); 


ReactDOM.render(

    <BrowserRouter>
    <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}>
      <App />
    </ReactReduxFirebaseProvider>
    </Provider>
     
  
    </BrowserRouter>
,
  document.getElementById('root')
);
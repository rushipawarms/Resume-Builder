import { combineReducers } from "redux";
import docReduer from "./docReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'
import authReducer from "./authReducer";


const rootReducer=combineReducers({
    doc:docReduer,
    contact:contactReducer,
    education:educationReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer,
    auth:authReducer

})

export default rootReducer;
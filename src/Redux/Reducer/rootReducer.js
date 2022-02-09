import { combineReducers } from "redux";
import docReduer from "./docReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";


const rootReducer=combineReducers({
    doc:docReduer,
    contact:contactReducer,
    education:educationReducer

})

export default rootReducer;
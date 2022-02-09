import * as educationAction from '../actions/action'
import initialState from '../Reducer/intialStates.json'

const educationReducer =(state=initialState.education,action)=>{

    switch(action.type)
    {
        case educationAction.SET_EDUCATION:
            return{...action.payload}
        case educationAction.UPDATE_EDUCATION:
            return{...action.payload}
        default:
            return state;
    }
}

export default educationReducer;
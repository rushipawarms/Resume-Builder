import * as contactAction  from '../actions/action'
import initialState from '../Reducer/intialStates.json'

const contactReducer =(state=initialState.contact,action)=>{
    switch(action.type)
    {
        case contactAction.SET_CONTACT:
            return{...action.payload}
        case contactAction.UPDATE_CONTACT:
            return{...action.payload}
        default:
            return state;

    }

}

export default contactReducer;
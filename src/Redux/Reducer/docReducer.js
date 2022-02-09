import * as docActions from '../actions/action'
import initialState from '../Reducer/intialStates.json'

const docReduer=(state=initialState.doc,action)=>{

    switch(action.type)
    {
     
            case docActions.SET_SKIN:
                return{...state,id:action.payload.id,skincd:action.payload.skincd}
            case docActions.UPDATE_SKIN:
                return{...state,skincd:action.payload.skincd}
            default:
                return state;
    }
}

export default docReduer;
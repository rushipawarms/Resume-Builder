import * as authActions from '../actions/action';
import initialState from '../Reducer/intialStates.json';

 const authReducer=(state=initialState.auth,action)=>{
        switch(action.type)
        {
            case authActions.REGISTER_REQ:
                return{
                    ...state,loading:true
                }
            case authActions.REGISTER_SUCC:
                return{
                    ...state,loading:false
                }
            case authActions.REGISTER_FAIL:
                return{
                    ...state,loading:false,error:action.payload
                }
            case authActions.SIGN_IN_REQ:
                return{
                    ...state,loading:true
                }
            case authActions.SIGN_IN_SUCC:
                return{...state,loading:false}
            case authActions.SIGN_IN_FAIL:
                return{...state,loading:false,error:action.payload}
            case authActions.SIGN_OUT_REQ:
                return{...state,loading:true}
            case authActions.SIGN_OUT_SUCC:
                return{...state,loading:false}
            case authActions.SIGN_OUT_FAIL:
                return{...state,loading:false,error:action.payload}
            case authActions.REMOVE_ERROR:
                return{...state,error:''}
            default:
                return state;
        }
 }

 export default authReducer;
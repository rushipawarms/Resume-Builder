import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';
import * as  authActions from '../actions/action';

const registerReq=()=>{
    return{
        type:authActions.REGISTER_REQ
    }
}
const registerSucc=()=>{
    return{
        type:authActions.REGISTER_SUCC
    }
}
const registerFail=(err)=>{
    return{
        type:authActions.REGISTER_FAIL,
        payload:err.message
    }
}
const signInReq=()=>{
    return{
        type:authActions.SIGN_IN_REQ
    }
}
const signInSucc=()=>{
    return{
        type:authActions.SIGN_IN_SUCC
    }
}
const signInFail=(err)=>{
    return{
        type:authActions.SIGN_IN_FAIL,
        payload:err.message
    }
}

const signOutReq=()=>{
    return{
        type:authActions.SIGN_OUT_REQ
    }
}
const signOutSucc=()=>{
    return{
        type:authActions.SIGN_OUT_SUCC
    }
}
const signOutFail=(err)=>{
    return{
        type:authActions.SIGN_OUT_FAIL,
        payload:err.message
    }
}
export const signOutUser=()=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signOutReq());
       try {
        const firebase=getFirebase();
       const res= await firebase.auth().signOut();
        dispatch(signOutSucc());
    }
        catch(err){
            dispatch(signOutFail());
            setTimeout(()=>{
                dispatch({type:authActions.REMOVE_ERROR})
            },3000)
        }
    }
}
export const signInUser=(userDate)=>{
    return async(dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(signInReq());
        const firebase=getFirebase();
        try
        {
            const res=await firebase.auth().signInWithEmailAndPassword(userDate.email,userDate.password)
            dispatch(signInSucc());
        }
        catch(e){
            dispatch(signInFail(e));
            setTimeout(()=>{
                dispatch({type:authActions.REMOVE_ERROR})
            },3000)
        }
        
    }
}

export const registerUser=(userDate)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch(registerReq());
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(userDate.email,userDate.password).then(async(data)=>{
           const res= await firestore.collection('users').doc(data.user.uid).set({
                email:userDate.email,
                resumeID:[]
            })
            dispatch(registerSucc());
        }).catch((err)=>{
            dispatch(registerFail(err));
            setTimeout(()=>{
                dispatch({type:authActions.REMOVE_ERROR})
            },5000)
        })
    }
}
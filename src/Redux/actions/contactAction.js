import * as contactAction from '../actions/action'

export const setcontact=(contact)=>{
    return{
        type:contactAction.SET_CONTACT,
        payload:contact
    }
}

export const updatecontact=(contact)=>{
    return{
        type:contactAction.UPDATE_CONTACT,
        payload:contact
    }
}
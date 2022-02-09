import * as educationAction from '../actions/action'

export const seteduction=(education)=>{
    return{
        type:educationAction.SET_EDUCATION,
        payload:education
    }
}

export const updateeducation=(education)=>{
    return{
        type:educationAction.UPDATE_EDUCATION,
        payload:education
    }
}
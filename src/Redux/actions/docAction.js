import * as docActions from '../actions/action';
import { v4 as uuidv4 } from 'uuid';

export const setSkin=(skincd)=>{
    console.log(skincd)
return{
    type:docActions.SET_SKIN,
    payload:{
        id:uuidv4(),
        skincd:skincd
    }
}

}

export const updateSkin=(skincd)=>{
return{
    type:docActions.UPDATE_SKIN,
    payload:{
        skincd:skincd
    }
}
}


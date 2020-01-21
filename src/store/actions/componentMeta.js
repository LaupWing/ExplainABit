import * as actionTypes from './actionTypes'

export const setDetail = (cmp)=>{
    return{
        type: actionTypes.SET_DETAIL,
        detail: cmp
    }
}
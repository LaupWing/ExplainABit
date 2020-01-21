import * as actionTypes from '../actions/actionTypes'
import data from './data'

const initialState = {
    componentMeta:data,
    detail: null
}

const setDetail = (state,action)=>{
    return {
        ...state,
        detail: action.detail
    }
}


const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_DETAIL: return setDetail(state,action)
        default: return state
    }
}

export default reducer
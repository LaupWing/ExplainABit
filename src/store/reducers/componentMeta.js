import * as actionTypes from '../actions/actionTypes'
import data from './data'

const initialState = {
    componentMeta:data
}

const setDetail = (state,action)=>{
    return {
        ...state
    }
}


const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_DETAIL: return setDetail(state,action)
        default: return state
    }
}

export default reducer
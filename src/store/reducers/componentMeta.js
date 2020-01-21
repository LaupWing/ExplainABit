import * as actionTypes from '../actions/actionTypes'
import data from './data'

const initialState = {
    componentMeta:data,
    detail: null
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_COMPONENTS: return state
        default: return state
    }
}

export default reducer
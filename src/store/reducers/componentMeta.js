import * as actionTypes from '../actions/actionTypes'

const initialState = {
    componentMeta:[]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_COMPONENTS: return state
        default: return state
    }
}

export default reducer
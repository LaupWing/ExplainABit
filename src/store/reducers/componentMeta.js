import * as actionTypes from '../actions/actionTypes'
const initialState = {
    componentMeta:[
        {
            name: 'Axios',
            date: [2020-1-21],
            description: ''
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: ''
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: ''
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: ''
        },
    ]
}

const reducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_COMPONENTS: return state
        default: return state
    }
}

export default reducer
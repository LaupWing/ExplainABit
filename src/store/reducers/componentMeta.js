import * as actionTypes from '../actions/actionTypes'
const initialState = {
    componentMeta:[
        {
            name: 'Axios',
            date: [2020-1-21],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, dapibus non nisl eget, lobortis rhoncus nisl. Praesent nec dictum justo. Quisque non pharetra enim, auctor dapibus felis.'
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, dapibus non nisl eget, lobortis rhoncus nisl. Praesent nec dictum justo. Quisque non pharetra enim, auctor dapibus felis.'
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, dapibus non nisl eget, lobortis rhoncus nisl. Praesent nec dictum justo. Quisque non pharetra enim, auctor dapibus felis.'
        },
        {
            name: 'Axios',
            date: [2020-1-21],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum augue, dapibus non nisl eget, lobortis rhoncus nisl. Praesent nec dictum justo. Quisque non pharetra enim, auctor dapibus felis.'
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
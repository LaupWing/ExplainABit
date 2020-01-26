const initialState = {
    todos: [],
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'INITPOSTS':
            return{
                ...state,
                todos: action.value
            }
        case 'ADDPOST':
            return {
                ...state,
                todos: state.todos.concat(action.value)
            }
        default: return state
    }
}

export default reducer
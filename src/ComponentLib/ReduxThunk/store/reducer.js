const initialState = {
    posts: [],
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'INITPOSTS':
            console.log(action)
            return{
                ...state,
                posts: action.value
            }
        case 'ADDPOST':
            return {
                ...state,
                posts: state.posts.concat(action.value)
            }
        default: return state
    }
}

export default reducer
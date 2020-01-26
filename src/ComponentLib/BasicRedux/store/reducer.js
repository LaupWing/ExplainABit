const initialState = {
    counter: 0,
    message: 'Result: '
}

const reducer = (state=initialState, action)=>{
    console.log(action)
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'ADDXAMOUNT':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            }
        case 'DECREMENTXAMOUNT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: return state
    }
}

export default reducer
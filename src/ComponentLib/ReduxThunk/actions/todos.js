export const onInitPosts = (value) =>{
    return{
        type: 'INITTODOS',
        value
    }
}

export const fetchPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
    return dispatch  =>dispatch(onInitPosts('test'))
}
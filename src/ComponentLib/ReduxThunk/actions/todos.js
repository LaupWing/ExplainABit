export const onInitPosts = (value) =>{
    return{
        type: 'INITPOSTS',
        value
    }
}

export const fetchPosts = () =>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const splitted = json.slice(0,20)
                return dispatch(onInitPosts(splitted))
            })
    }
}
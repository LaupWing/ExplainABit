export const onInitPosts = (value) =>{
    return{
        type: 'INITTODOS',
        value
    }
}

export const fetchPosts = () =>{
    return dispatch =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                const splitted = json.slice(0,20)
                console.log(splitted)
                return dispatch(onInitPosts(splitted))
            })
    }
}
const initState ={
    posts: [
        {id:'1', title:"squirtle laid an egg",body:"Lorem ipsum,dolar sit amet"},
        {id:'2', title:"Charmander laid an egg",body:"Lorem ipsum,dolar sit amet"},
        {id:'3', title:"a Helix fossil was found",body:"Lorem ipsum,dolar sit amet"},
    ]
}
const rootReducer = (state=initState,action) => {
    if(action.type==='DELETE_POST'){
        let newPosts = state.posts.filter(post=>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}
export default rootReducer;
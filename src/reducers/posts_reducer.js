export default function(state={}, action){
    switch(action.type){
        case 'GET_POSTS_ALL':
            return {...state, postsList:action.payload}
        default:
            return state;
    }
}
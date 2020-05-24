export default function(state={}, action){
    switch(action.type){
        case 'GET_COMMENTS_ALL':
            return {...state, commentsList:action.payload}
        default:
            return state;
    }
}
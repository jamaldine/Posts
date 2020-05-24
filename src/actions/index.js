import axios from 'axios';
const URL = 'http://localhost:4000';

export function postsListAll(){
    const request = axios.get(`${URL}/posts?_limit=6`)
                    .then(response=> response.data);

    return {
        type:'GET_POSTS_ALL',
        payload: request
    }
}

export function commentsListAll(){
    const request = axios.get(`${URL}/comments`)
                    .then(response=> response.data);

    return {
        type:'GET_COMMENTS_ALL',
        payload: request
    }
}
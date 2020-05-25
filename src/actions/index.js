import axios from "axios";
const URL = "http://localhost:4000";

export function postsListAll() {
  const request = axios
    .get(`${URL}/posts?_limit=6`)
    .then((response) => response.data);

  return {
    type: "GET_POSTS_ALL",
    payload: request,
  };
}

export function commentsListAll() {
  const request = axios
    .get(`${URL}/comments`)
    .then((response) => response.data);

  return {
    type: "GET_COMMENTS_ALL",
    payload: request,
  };
}

export function searchList(keyword) {
  const request = axios
    .get(`${URL}/posts?_limit=6&q=${keyword}`)
    .then((response) => response.data);

  return {
    type: "GET_SEARCH",
    payload: request,
  };
}

export function modifyPost(id, data) {
  let result = axios
    .put(`http://localhost:4000/posts/${id}`, data)
    .then(response => response.data);

  return {
    type: "MODIFY_POST",
    payload: result,
  };
}

export function addPost(data) {
    let result = axios
      .post(`http://localhost:4000/posts`, data)
      .then(response => response.data);
  
    return {
      type: "ADD_POST",
      payload: result,
    };
  }

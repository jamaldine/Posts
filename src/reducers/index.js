import { combineReducers } from "redux";
import posts from "./posts_reducer";
import comments from "./comments_reducer";
import post from './post_reducer';

const rootReducers = combineReducers({
  posts,
  comments,
  post
});

export default rootReducers;

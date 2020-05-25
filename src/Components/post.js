import React, { useState, createContext } from "react";
import { Button, Typography } from "@material-ui/core";
import AddPost from "./addPost";
import CommentsList from "./commentsList";
import SearchAppBar from "../Widgets/API_components/searchAppBar";

export const modifyContext = createContext();

const Post = (props) => {
  const {
    anchorElPost,
    handleClickPost,
    handleClosePost,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    posts,
    commentsList,
    postId,
    handleRefresh,
    modifyId,
    searchList
  } = props;

  const [modify, setModify] = useState("testing");
  const getKeywords = (event) => {
    let key = event.target.value;
    console.log(key)
    searchList(key);
  };
  return (
    <div>
      <Typography variant="h1" component="h2">
        Post
      </Typography>
      <SearchAppBar keywords={getKeywords} />
      <Button
        variant="contained"
        color="primary"
        component="span"
        onClick={handleClickPost}
      >
        add post
      </Button>
      {anchorElPost ? (
        <modifyContext.Provider value={[modify, setModify]}>
          <AddPost
            handleClickPost={handleClickPost}
            anchorElPost={anchorElPost}
            handleClosePost={handleClosePost}
            handleRefresh={handleRefresh}
            modifyId={modifyId}
          />
        </modifyContext.Provider>
      ) : null}
      <CommentsList
        handleClickPost={handleClickPost}
        anchorElPost={anchorElPost}
        handleClosePost={handleClosePost}
        handleRefresh={handleRefresh}
        posts={posts}
        commentsList={commentsList}
        anchorElComment={anchorElComment}
        handleClickComment={handleClickComment}
        handleCloseComment={handleCloseComment}
        postId={postId}
        modifyId={modifyId}
        {...props}
      />
    </div>
  );
};

export default Post;

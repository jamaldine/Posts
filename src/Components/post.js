import React, { useState, createContext } from "react";
import { Button, Typography } from "@material-ui/core";
import AddPost from "./addPost";
import CommentsList from "./commentsList";
import SearchAppBar from "../Widgets/API_components/searchAppBar";
import BasicButtonGroup from "../Widgets/API_components/basicButtonGroup";
import Grid from "@material-ui/core/Grid";

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
    searchList,
    modifyPost,
    addPost,
    getPost,
    postItem,
    handleHome,
  } = props;
  const [active, setActive] = useState(true);
  const [modify, setModify] = useState("testing");
  const getKeywords = (event) => {
    let key = event.target.value;
    searchList(key);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <SearchAppBar keywords={getKeywords} />
        </Grid>
        <Grid item xs={6} sm={3}>
          ici les filtres
        </Grid>
        <Grid item xs={6} sm={3}>
          <BasicButtonGroup setActive={setActive} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={handleClickPost}
          >
            add post
          </Button>
        </Grid>
      </Grid>

      {anchorElPost ? (
        <modifyContext.Provider value={[modify, setModify]}>
          <AddPost
            handleClickPost={handleClickPost}
            anchorElPost={anchorElPost}
            handleClosePost={handleClosePost}
            handleRefresh={handleRefresh}
            modifyId={modifyId}
            addPost={addPost}
            modifyPost={modifyPost}
            getPost={getPost}
            postItem={postItem}
            handleHome={handleHome}
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
        active={active}
        handleHome={handleHome}
        {...props}
      />
      <Button>load more</Button>
    </div>
  );
};

export default Post;

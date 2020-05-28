import React, { useState, createContext } from "react";
// import { Button } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import AddPost from "./addPost";
import CommentsList from "./commentsList";
import SearchAppBar from "../Widgets/API_components/searchAppBar";
import Tags from "../Widgets/API_components/tags";
import BasicButtonGroup from "../Widgets/API_components/basicButtonGroup";
import Grid from "@material-ui/core/Grid";
import "./styles/posts.css";
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
      <Grid container spacing={3} className="wrapper">
        <Grid className="box1">
          <SearchAppBar keywords={getKeywords} className="search" />
        </Grid>
        <Grid className="box2">
          <Tags className="tags"/>
        </Grid>
        <Grid className="box3">
          <BasicButtonGroup setActive={setActive} className="tuile_table" {...props} />
        </Grid>
        <Grid className="box4">
          <Button
            variant="danger"
            onClick={handleClickPost}
          >
            + POST
          </Button>
        </Grid>
      </Grid>
      {/**/}
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

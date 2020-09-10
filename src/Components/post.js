import React, { useState, createContext } from "react";
import Button from "react-bootstrap/Button";
import AddPost from "./addPost";
import CommentsList from "./commentsList";
import SearchAppBar from "../Widgets/API_components/searchAppBar";
import FilterSelect from "../Widgets/API_components/filterSelect";
import Tags from "../Widgets/API_components/tags";
import BasicButtonGroup from "../Widgets/API_components/basicButtonGroup";
import Grid from "@material-ui/core/Grid";
import "./styles/post.scss";
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
  const filterItems = ['author', 'title','comment'];
  return (
    <React.Fragment>
      <Grid className="container">
          <SearchAppBar keywords={getKeywords} className="search" />
          {filterItems.map(item=><FilterSelect filter={item} />)}
          <BasicButtonGroup
            className='button-group'
            setActive={setActive}
            {...props}
          />
          <Button className='post-btn' variant="danger" onClick={handleClickPost}>
            + POST
          </Button>
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
        className="commentsList"
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
    </React.Fragment>
  );
};

export default Post;

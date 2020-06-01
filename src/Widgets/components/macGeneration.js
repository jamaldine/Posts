import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddComment from "../../Components/addComment";


const MacGeneration = (props) => {
  const {
    posts,
    commentsList,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    postId,
  } = props;

  return (
    <>
      {posts
        ? posts.map((post) =>
            post.visible ? (
              <div>
                <div>{post.author}</div>
                <div>{post.title}</div>
                <div align="right">
                  {commentsList
                    ? commentsList.map((comment) => {
                        if (comment.postId === post.id)
                          return (
                            <span key={comment.postId}>
                              {comment.body}
                              <br />
                            </span>
                          );
                      }
                      
                      )
                    : null}
                  <AddCircleOutlineIcon
                    onClick={(event) => handleClickComment(event, post.id)}
                  />
                  {anchorElComment ? (
                    <AddComment
                      postId={postId}
                      handleClickComment={handleCloseComment}
                      handleCloseComment={handleCloseComment}
                      anchorElComment={anchorElComment}
                      {...props}
                    />
                  ) : null}
                </div>
              </div>
            ) : null
          )
        : null}
    </>
  );
};

export default MacGeneration;

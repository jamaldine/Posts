import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

export default function Modal(WrappedComponent) {
  return ({
    handleClosePost,
    anchorElPost,
    modifyId,
    addPost,
    modifyPost,
    getPost,
    postItem
  }) => {
    const open = Boolean(anchorElPost);
    const id = open ? "simple-popover" : undefined;
    return (
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorElPost}
          onClose={handleClosePost}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography>
            <button onClick={handleClosePost}>x</button>
            <WrappedComponent
              modifyId={modifyId}
              addPost={addPost}
              modifyPost={modifyPost}
              getPost={getPost}
              postItem={postItem}
              att={2}
            />
          </Typography>
        </Popover>
      </div>
    );
  };
}

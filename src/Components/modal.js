import React from 'react';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const Modal =({children, handleCloseComment, anchorElComment})=>{
    const open = Boolean(anchorElComment);
    const id = open ? "simple-popover" : undefined;
    return (
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorElComment}
          onClose={handleCloseComment}
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
            <button onClick={handleCloseComment}>x</button>
            {children}
          </Typography>
        </Popover>
      </div>
    );
}

export default Modal;
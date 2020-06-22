import React from 'react';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const Modal =({children, handleCloseModal, anchorElModal})=>{
    const open = Boolean(anchorElModal);
    const id = open ? "simple-popover" : undefined;
    return (
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorElModal}
          onClose={handleCloseModal}
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
            <button onClick={handleCloseModal}>x</button>
            {children}
          </Typography>
        </Popover>
      </div>
    );
}

export default Modal;
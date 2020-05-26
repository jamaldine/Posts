import React from "react";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const { options, handleClickPost, handleRefresh, postId } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleDelete = (event, id) => {
    let modifyPost = null;
    axios.get(`http://localhost:4000/posts/${id}`).then((res) => {
      modifyPost = res.data;
      modifyPost["visible"] = false;
      setTimeout(() => {
        axios
          .put(`http://localhost:4000/posts/${id}`, modifyPost)
          .then((res) => {
            handleRefresh();
          });
      }, 5000);
    });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  /*<HighlightOffIcon
  onClick={(event) => handleDelete(event, post.id)}
/>
<EditOutlinedIcon
  onClick={(event) => handleClickPost(event, post.id)}
/>*/
const toDelete = (event) => {
  handleDelete(event, postId)
  handleClose();
}

  let tag = [
    <HighlightOffIcon onClick={(event) => toDelete} />,
    <EditOutlinedIcon onClick={(event) => handleClickPost(event, postId)} />,
  ];

  const handleAction = (option) => {
    console.log("{tag[i]}", option);
    //handleDelete(event, postId)}
  };
  
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option, i) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            //onClick={handleAction(i)}
          >
            {tag[i]}{option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddComment from "./addComment";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function CommentsList(props) {



  const {
    posts,
    commentsList,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    postId,
    handleRefresh,
    handleClickPost,
  } = props;

  const classes = useStyles();

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
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Auteur</TableCell>
            <TableCell align="right">Titre</TableCell>
            <TableCell align="right">Commentaire</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts
            ? posts.map((post) =>
                post.visible ? (
                  <TableRow key={post.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      onClick={() => {
                        console.log("clicked", post.id);
                      }}
                    >
                      {post.author}
                    </TableCell>
                    <TableCell
                      align="right"
                      onClick={() => {
                        console.log("clicked", post.id);
                      }}
                    >
                      {post.title}
                    </TableCell>
                    <TableCell align="right">
                      {commentsList
                        ? commentsList.map((comment) => {
                            if (comment.postId === post.id)
                              return (
                                <span key={comment.postId}>
                                  {comment.body}
                                  <br />
                                </span>
                              );
                          })
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
                    </TableCell>
                    <TableCell align="right">
                      <HighlightOffIcon
                        onClick={(event) => handleDelete(event, post.id)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <EditOutlinedIcon
                        onClick={(event) => handleClickPost(event, post.id)}
                      />
                    </TableCell>
                  </TableRow>
                ) : null
              )
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

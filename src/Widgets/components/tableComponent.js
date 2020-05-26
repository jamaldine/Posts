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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddComment from "../../Components/addComment";
import LongMenu from "../API_components/longMenu";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const TableComponent = (props) => {
  const {
    posts,
    commentsList,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    postId,
  } = props;

  const options = ["Delete", "Modify"];

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Comment</TableCell>
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
                    {/*<TableCell align="right">
                      <HighlightOffIcon
                        onClick={(event) => handleDelete(event, post.id)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <EditOutlinedIcon
                        onClick={(event) => handleClickPost(event, post.id)}
                      />
                      </TableCell>*/}
                    <TableCell>
                      <LongMenu options={options} {...props} postId={post.id} />
                    </TableCell>
                  </TableRow>
                ) : null
              )
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;

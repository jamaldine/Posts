import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import {
  postsListAll,
  commentsListAll,
  searchList,
  modifyPost,
  addPost,
  getPost,
  clearGetPost,
} from "../../actions";
import Post from "../../Components/post";
import './post.css';
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickPost = this.handleClickPost.bind(this);
    this.handleClosePost = this.handleClosePost.bind(this);
    this.state = {
      anchorElPost: null,
      anchorElComment: null,
      posts: [],
      commentsList: [],
      postId: null,
      modifyId: null,
      formData: {
        body: {
          element: "input",
          value: "",
          label: true,
          labelText: "Comment",
          config: {
            name: "comment_input",
            type: "text",
            placeholder: "Entrer le commentaire",
          },
          validation: {
            required: true,
            minLen: 5,
          },
          valid: false,
          validationMessage: "",
          touched: false,
        },
        description: {
          element: "textarea",
          value: "",
          label: true,
          labelText: "Description",
          config: {
            name: "description_textarea",
            rows: 4,
            cols: 36,
          },
          validation: {
            required: false,
          },
          valid: true,
        },
        country: {
          element: "select",
          value: "",
          label: true,
          labelText: "Country",
          config: {
            name: "country_select",
            options: [
              { val: "Morocco", text: "Morocco" },
              { val: "France", text: "France" },
              { val: "England", text: "England" },
            ],
          },
          validation: {
            required: false,
          },
          valid: true,
        },
      },
      refresh: false,
      tuile_table: true,
    };
  }

  componentDidMount() {
    this.props.postsListAll();
    this.props.commentsListAll();
  }

  componentWillUnmount() {
    this.props.clearGetPost();
  }

  handleClickPost = (event, id) => {
    this.setState({
      anchorElPost: event.currentTarget,
      modifyId: id,
    });
    this.props.getPost(id);
  };

  handleClosePost = () => {
    this.setState({
      anchorElPost: null,
    });
  };

  handleClickComment = (event, id) => {
    this.setState({
      anchorElComment: event.currentTarget,
      postId: id,
    });
  };

  handleCloseComment = () => {
    this.setState({
      anchorElComment: null,
    });
  };

  updateForm = (data) => {
    this.setState({
      formData: data,
    });
  };

  handleComment = (commentsList) => {
    this.setState({ commentsList });
  };

  handlePost = (posts) => {
    this.setState({ posts });
  };

  handleRefresh = () => {
    this.setState({
      refresh: !this.state.refresh,
    });
  };

  handleTuile = () => {
    this.setState({
      tuile_table: false,
    });
  };

  handleTable = () => {
    this.setState({
      tuile_table: true,
    });
  };

  render() {
    if (this.props.home) {
      return <Redirect to="/" />;
    }
    return (
      <Post
      className="container"
        anchorElPost={this.state.anchorElPost}
        anchorElComment={this.state.anchorElComment}
        handleClickPost={this.handleClickPost}
        handleClosePost={this.handleClosePost}
        handleClickComment={this.handleClickComment}
        handleCloseComment={this.handleCloseComment}
        commentsList={this.props.comments.commentsList}
        posts={this.props.posts.postsList}
        formData={this.state.formData}
        updateForm={this.updateForm}
        handleRefresh={this.handleRefresh}
        postId={this.state.postId}
        modifyId={this.state.modifyId}
        searchList={this.props.searchList}
        addPost={this.props.addPost}
        getPost={this.props.getPost}
        postItem={this.props.post.postItem}
        modifyPost={this.props.modifyPost}
        home={this.props.home}
        handleHome={this.props.handleHome}
        tuile_table={this.state.tuile_table}
        handleTuile={this.handleTuile}
        handleTable={this.handleTable}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    post: state.post,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      postsListAll,
      commentsListAll,
      searchList,
      modifyPost,
      addPost,
      getPost,
      clearGetPost,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

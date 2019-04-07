import React, { Component } from 'react';
import EditPostForm from './EditPostForm';
import Comments from '../Components/Comments';
import { connect } from 'react-redux';
import {
  addNewComment,
  deleteComment,
  getPostFromAPI,
  deletePostFromAPI,
  upVotePostFromAPI,
  downVotePostFromAPI
} from '../actions';

class Post extends Component {

  constructor(props) {
    super(props)
    this.state = { isEditing: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditCancel = this.handleEditCancel.bind(this);
    this.handleEditShow = this.handleEditShow.bind(this);
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleDelete() {
    // call the delete post API
    this.props.deletePostFromAPI(this.props.post.id);
    // then redirect to homepage
    this.props.history.push('/');
  }

  handleEditCancel() {
    this.setState({
      isEditing: false
    });
  }

  handleEditShow() {
    this.setState({
      isEditing: true
    });
  }

  handleUpVote(id) {
    this.props.upVotePostFromAPI(id);
  }

  handleDownVote(id) {
    this.props.downVotePostFromAPI(id);
  }

  componentDidMount() {
    // ADD thunked dispatch prop here:
    this.props.getPostFromAPI(this.props.id);
  }

  render() {

    if (this.props.post === undefined) {
      return <div>Loading...</div>

    } else {

      let display;
      const { title,
        description,
        body,
        id,
        comments,
        votes } = this.props.post;

      const commentComponent = (
        <Comments
          postId={id}
          comments={comments}
          triggerAddComment={this.props.addNewComment}
          triggerDeleteComment={this.props.deleteComment} />
      )

      const votingButtons = (
        <span>
          {votes} votes
          <button role="img" onClick={() => this.handleUpVote(id)}>🔺</button>
          <button role="img" onClick={() => this.handleDownVote(id)}>🔻</button>
        </span>
      )

      if (this.state.isEditing === false) {
        display =
          (<div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{body}</p>
            <button onClick={this.handleEditShow}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
            {votingButtons}
            {commentComponent}
          </div>)

      } else {
        display =
          (<>
            <EditPostForm
              setIsEditingFalse={this.handleEditCancel}
              postData={this.props.post}
            />
            {votingButtons}
            {commentComponent}
          </>)
      }

      return display;
    }
  }
}

function mapStateToProps(state) {
  return { ...state, post: state.post };
}

const mapDispatchToProps = {
  addNewComment,
  deleteComment,
  getPostFromAPI,
  deletePostFromAPI,
  upVotePostFromAPI,
  downVotePostFromAPI
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);
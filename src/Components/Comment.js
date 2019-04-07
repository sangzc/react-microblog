import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCommentFromAPI } from '../actions'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(evt) {
    this.props.deleteCommentFromAPI(
      this.props.postId,
      this.props.id);
  }


  render() {
    const { message } = this.props;
    return (
      <div>
        <button onClick={this.handleDelete}>X</button>
        {message}
      </div>
    );
  }
}

export default connect(
  null,
  { deleteCommentFromAPI })(Comment);
import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import { connect } from 'react-redux';
import { sendPostToAPI } from '../actions';

/** Component to display form to capture a new post */
class NewPostForm extends Component {

  constructor(props) {
    super(props)
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    // Upon cancel button being clicked, redirect to home
    this.props.history.push('/');
  }

  handleSubmit(post) {
    // Upon submit button being clicked, add a new post
    // Then redirect to home page.
    this.props.sendPostToAPI(post)
    this.props.history.push('/');
  }

  render() {

    return (
      <PostForm
        title="New Post"
        handleSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    );
  }
}


export default connect(null, { sendPostToAPI })(NewPostForm);
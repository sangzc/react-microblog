import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendCommentToAPI } from '../actions';


class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.sendCommentToAPI(
      this.props.postId,
      this.state
    );
    this.setState({
      comment: ''
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='comment'
            name='comment'
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { sendCommentToAPI })(NewCommentForm);
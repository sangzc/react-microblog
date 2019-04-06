import React, { Component } from 'react';

class PostForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
        title: this.props.post.title,
        description: this.props.post.description,
        body: this.props.post.body
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const newPost = {
        ...this.state, 
        comments: this.props.post.comments
    }
    this.props.handleSubmit(newPost, this.props.post.id)

    }

  handleChange(evt){
    this.setState({
        [evt.target.name]: evt.target.value
    });
  }

  handleCancel() {
    this.props.handleCancel()
  }

  render() {
    return(
        <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input id="title" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                    />
            <br />
            <label htmlFor="description">Description:</label>
            <input id="description" 
                    name="description" 
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
            <br />
            <label htmlFor="body">Body:</label>
            <input id="body" 
                    type="textarea" 
                    name="body" 
                    value={this.state.body}
                    onChange={this.handleChange}
                    />
            <br />
            <button type="submit">Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
        </form>
        </div>
    ); 
  }
}

export default PostForm;
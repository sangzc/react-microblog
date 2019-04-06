import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {

  handleDownVote(postID) {
    this.props.handleDownVote(postID);
  }

  handleUpVote(postID) {
    this.props.handleUpVote(postID);
  }

  render() {
    debugger
    const { title, 
            description, 
            id, 
            votes} = this.props;

    return (
      <div>
        <Link to={`/${id}`}><h3>{title}</h3></Link>
        <p>{description}</p>
        <p>${votes} votes</p>
        <button onClick={()=>this.handleUpVote(id)}>🔺</button>
        <button onClick={()=>this.handleDownVote(id)}>🔻</button>
      </div>
    );
  }
}

export default Post;
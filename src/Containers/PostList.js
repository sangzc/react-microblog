import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import { getAllPostsFromAPI,
         upVotePostFromAPI,
         downVotePostFromAPI } from '../actions';


class PostList extends Component {

  componentDidMount() {
    // let resp = await axios.get('http://localhost:5000/api/posts');
    this.props.getAllPostsFromAPI();
  }

  render() {
    return (
      <div>
        {this.props.posts.map(
          ({ title, description, body, id, votes}) => 
          <PostCard
            key={id} 
            title={title}
            description={description}
            body={body}
            votes={votes}
            id={id}
            handleUpVote={this.props.upVotePostFromAPI}
            handleDownVote={this.props.downVotePostFromAPI}
          />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { getAllPostsFromAPI, 
    upVotePostFromAPI, 
    downVotePostFromAPI })(PostList);
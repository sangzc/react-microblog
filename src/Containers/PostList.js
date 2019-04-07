import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import { getAllPostsFromAPI,
         upVotePostFromAPI,
         downVotePostFromAPI } from '../actions';


class PostList extends Component {

  componentDidMount() {
    console.log("componentDidMount is running!")
    this.props.getAllPostsFromAPI();
  }

  render() {
    if (!this.props.posts) return <div>Loading</div>
    return (
      <div>
        {this.props.posts.map(
          ({ title, description, id, votes}) => 
          <PostCard
            key={id} 
            title={title}
            description={description}
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
  console.log("PostList, mapStateToProps, state", state)
  return { ...state, posts: state.posts };
}

export default connect(
  mapStateToProps,
  { getAllPostsFromAPI, 
    upVotePostFromAPI, 
    downVotePostFromAPI })(PostList);
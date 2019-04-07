import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import PostCard from '../Components/PostCard';

import {
  getAllPostsFromAPI,
  upVotePostFromAPI,
  downVotePostFromAPI
} from '../actions';


class PostList extends Component {

  componentDidMount() {
    this.props.getAllPostsFromAPI();
  }

  render() {
    if (!this.props.posts) return <Typography variant="h3" color="inherit">Loading</Typography>
    return (
      <div>
        {this.props.posts.map(
          ({ title, description, id, votes }) =>
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
  return { ...state, posts: state.posts };
}

export default connect(
  mapStateToProps,
  {
    getAllPostsFromAPI,
    upVotePostFromAPI,
    downVotePostFromAPI
  })(PostList);
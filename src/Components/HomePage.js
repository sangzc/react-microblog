import React, { Component } from 'react';
import PostList from '../Containers/PostList';

class HomePage extends Component {
  render() {
    return (
      <div>
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

export default HomePage;
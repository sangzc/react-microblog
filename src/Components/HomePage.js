import React, { Component } from 'react';
import PostList from '../Containers/PostList';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>Marketing fluff. Fluffy fluff, so fluffy. Fluffity fluff fluff. Marketing.</p>
                <PostList posts={this.props.posts}/>
            </div>
        );
    }
}

export default HomePage;
import React, { Component } from 'react';
import PostList from '../Containers/PostList';
import { connect } from 'react-redux';


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

function mapStateToProps(state){
    return { posts: state.posts };
}



export default connect(mapStateToProps)(HomePage);
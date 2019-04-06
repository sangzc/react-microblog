import React, { Component } from 'react';
import PostForm from '../Components/PostForm';
import { connect } from 'react-redux';
import { addNewPost,
         deletePost,
         updatePost,
         addNewComment,
         deleteComment
         } from '../actions';

class EditPostForm extends Component {

    constructor(props) {
        super(props)
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCancel() {
        this.props.setIsEditingFalse()
    }

    handleSubmit(post, id) {
        this.props.updatePost(id, post)
        this.props.setIsEditingFalse()
    }

    render() {
        return (
            <PostForm 
            title="Edit Post" 
            handleSubmit={this.handleSubmit}
            handleCancel={this.handleCancel}
            post={this.props.postData}
            />
        );
    }
}
function mapStateToProps(state, ownProps){
    const post = state.posts.find(p => ownProps.id == p.id)
    return { post };
}

const mapDispatchToProps = {
    addNewPost,
    deletePost,
    updatePost,
    addNewComment,
    deleteComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
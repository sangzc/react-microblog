import React, { Component } from "react";
import Comment from "./Comment";
import NewCommentForm from '../Containers/NewCommentForm';

class Comments extends Component {

  render() {
    console.log("THESE ARE OUR COMMENTs.js PROPSSS", this.props.comments)

    const comments = this.props.comments.map(cmt => (
            <Comment 
                  message={cmt.text} 
                  key={cmt.id} 
                  id={cmt.id} 
                  triggerDeleteComment={this.props.triggerDeleteComment}
                  postId={this.props.postId}/>
        ));
    return <div>
             {comments}
             <NewCommentForm 
                  triggerAddComment={this.props.triggerAddComment}
                  postId={this.props.postId}
                  />
            </div>;
  }
}

export default Comments;

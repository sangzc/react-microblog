import React, { Component } from 'react';

class Comment extends Component {
     constructor(props){
         super(props);
         this.handleClick = this.handleClick.bind(this);
     }

     handleClick(evt){
         this.props.triggerDeleteComment(this.props.postId, this.props.id);
     }


    render() {
        const {message} =  this.props;
        return (
            <div>
                <button onClick={this.handleClick}>X</button>
                {message}
            </div>
        );
    }
}

export default Comment;
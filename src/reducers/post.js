import {
  UPDATE_POST,
  ADD_NEW_COMMENT,
  DELETE_COMMENT,
  LOAD_POST,
  UPVOTE_POST,
  DOWNVOTE_POST
} from '../actionTypes';

// const INITIAL_STATE = {
//     post: {}
// };

export default function rootReducer(state = {}, action) {

  if (action.type === UPDATE_POST) {
    // payload: { postID, updatePost }
    let updatedPost = action.payload.updatedPost
    updatedPost.comments = [];
    updatedPost.votes = 0
    return updatedPost;
  }

  else if (action.type === ADD_NEW_COMMENT) {
    const newComment = action.payload.comment;
    let updatedPost = {
      ...state,
      comments: [...state.comments, newComment]
    }
    return updatedPost;
  }

  else if (action.type === DELETE_COMMENT) {
    // payload: {postID, commentID}
    const updatedComments = state.comments.filter(
      p => p.id !== action.payload.commentID
    )
    let updatedPost = { ...state, comments: updatedComments }
    return updatedPost;
  }

  else if (action.type === LOAD_POST) {
    const newPost = action.payload;
    return newPost;
  }

  else if (action.type === UPVOTE_POST) {
    // Currentlystate => { posts: [] }
    const updatedVote = action.payload.votes
    const updatedPost = { ...state, votes: updatedVote }
    return updatedPost
  }

  else if (action.type === DOWNVOTE_POST) {
    const updatedVote = action.payload.votes
    const updatedPost = { ...state, votes: updatedVote }
    return updatedPost;
  }

  else {
    return state;
  }


}
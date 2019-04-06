import axios from 'axios';
import { ADD_NEW_POST,
         DELETE_POST,
         UPDATE_POST,
         ADD_NEW_COMMENT,
         DELETE_COMMENT,
         LOAD_POSTS,
         LOAD_POST
        } from './actionTypes';


export function addNewPost(newPost){
    return { type: ADD_NEW_POST, 
             payload: newPost 
    };
}

export function deletePost(postID){
    return { type: DELETE_POST,
             payload: postID
    };
}

export function updatePost(postID, updatedPost){
    return { type: UPDATE_POST,
             payload: { postID, updatedPost }
    };
}

export function addNewComment(postID, comment){
    return { type: ADD_NEW_COMMENT, 
             payload: {postID, comment}
    };
}

export function deleteComment(postID, commentID){
    return { type: DELETE_COMMENT, 
             payload: {postID, commentID}
    };
}

export function getAllPostsFromAPI() {
    return async function(dispatch){
        const res = await axios.get('http://localhost:5000/api/posts'); 
        const posts = res.data;
        dispatch(gotPosts(posts));
    }
}

export function gotPosts(posts){
    return { type: LOAD_POSTS, 
        payload: posts
    };
}

export function getAllPostFromAPI(postID) {
    return async function(dispatch){
        console.log("HELLO FROM THE GETALLPOSTFROMAPI function")
        const res = await axios.get(`http://localhost:5000/api/posts/${postID}`); 
        const post = res.data;
        console.log("THIS IS WHAT THE RESULT LOOKS LIKE", res)
        dispatch(gotPost(post));
    }
}

export function gotPost(post){
    return { type: LOAD_POST, 
             payload: post
    };
}


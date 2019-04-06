import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../Components/PostCard';
import axios from 'axios';
import { getAllPostsFromAPI } from '../actions';


class PostList extends Component {


     componentDidMount(){
        // let resp = await axios.get('http://localhost:5000/api/posts');
        // console.log('response is ', resp.data)
         this.props.getAllPostsFromAPI();
    }
    render() {
        console.log('this.props.post is', this.props)
        return (
            <div>
                {this.props.posts.map(
                    p => <PostCard 
                        title={p.title}
                        description={p.description}
                        body={p.body}
                        key={p.id}
                        id={p.id}
                    />)}
            </div>
        );
    }
}



function mapStateToProps(state){
    return { posts: state.posts };
}



export default connect(mapStateToProps, {getAllPostsFromAPI} )(PostList);
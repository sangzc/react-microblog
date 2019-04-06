import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage";
import NewPostForm from "./NewPostForm";
import "./App.css";
import Post from "./Post";


class App extends Component {
  
  render() {

    return (
      <div className="App">
        <nav>
          <h1>Microblog</h1>
          <p>Get in the Rithm of blogging!</p>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/new">Add a new post</NavLink>
        </nav>
        <Switch>
          <Route
            exact
            path="/"
            render={rtProps => 
              <HomePage />}
          />
          <Route
            exact
            path="/new"
            render={rtProps =>
              <NewPostForm 
                {...rtProps} 
                triggerAddPost={this.addPost}
              />}
          />
          <Route
            exact
            path="/:id"
            render={rtProps => 
              <Post 
                  id={rtProps.match.params.id}
                  {...rtProps} 
                  rtProps={rtProps}
                  deletePost={this.deletePost}
                  editPost={this.editPost}
                  triggerAddComment={this.addComment}
                  triggerDeleteComment={this.deleteComment} 
              />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

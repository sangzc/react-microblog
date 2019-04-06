import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage";
import NewPostForm from "./NewPostForm";
import Post from "./Post";
import "./App.css";


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
          <Route exact path="/"
            render={rtProps => <HomePage />} 
          />
          <Route exact path="/new"
            render={rtProps => <NewPostForm {...rtProps} />}
          />
          <Route exact path="/:postId"
            render={rtProps => 
              <Post id={rtProps.match.params.postId}
                  {...rtProps} 
              />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;

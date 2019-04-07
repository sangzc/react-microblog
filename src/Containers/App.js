import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage";
import NewPostForm from "./NewPostForm";
import Typography from '@material-ui/core/Typography';
import Post from "./Post";
import "./App.css";


class App extends Component {

  render() {

    return (
      <div className="App">
        <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <nav>
          <Typography variant="h1">Macroblog</Typography>
          <Typography variant="h6">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
           praesentium voluptatum deleniti.</Typography>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/new">Add a new post</NavLink>
        </nav>

        <Switch>
          <Route exact path="/"
            render={() => <HomePage />}
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

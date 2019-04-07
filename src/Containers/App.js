import React, { Component } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "../Components/HomePage";
import NewPostForm from "./NewPostForm";
import Typography from '@material-ui/core/Typography';
import Post from "./Post";
import "./App.css";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';
import { IconButton } from "@material-ui/core";


class App extends Component {

  render() {

    return (
      <div className="App">
        <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <AppBar position="sticky" >
          <Toolbar>
            <IconButton color="inherit" variant="i">
              <NavLink to="/">
                <i class="material-icons">home</i>
              </NavLink>
            </IconButton>
            <Typography variant="title" color="inherit">Macroblog</Typography>
            <Fab variant="extended" size="large" >
              <NavLink to="/new">
                <Typography variant="inherit" color="inherit">
                  Add Post
                </Typography>
                {/* <i class="material-icons">add</i> */}
              </NavLink>
            </Fab>
          </Toolbar>
        </AppBar>

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

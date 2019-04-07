import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';

class Post extends Component {

  handleDownVote(postID) {
    this.props.handleDownVote(postID);
  }

  handleUpVote(postID) {
    this.props.handleUpVote(postID);
  }

  render() {
    const { title,
      description,
      id,
      votes } = this.props;

    return (
      <Card>
        <CardMedia 
          style={ {height:0, paddingTop: '56.25%'}} 
          image="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_16x9_992.jpg"
        />
        <Link to={`/${id}`}>
          <Typography variant="h5" color="inherit">{title}</Typography>
        </Link>
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Typography variant="headline">{votes} votes</Typography>
          <Fab color="default" onClick={() => this.handleDownVote(id)}>
            <i class="material-icons">arrow_downward</i>
          </Fab>
          <Fab color="primary" onClick={() => this.handleUpVote(id)}>
            <i class="material-icons">arrow_upward</i>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default Post;
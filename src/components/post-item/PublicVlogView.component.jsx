import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {GET_BLOG_POST} from "../../helpers/postQueries.gql";
import Loader from "../loader/Loading.component";
import Error from '../error/Error.component';
import {useStyles} from "../../styles/blog/blogView.styles";

const PublicVlogView = () => {
  const classes = useStyles();
  const {vlog_id} = useParams();
  const {loading, error, data} = useQuery(GET_BLOG_POST, {
    variables: {id: vlog_id}
  });

  if (loading) return <Loader />;
  if (error) return <Error errText={error} />;

  const post = data && data.getPost;

  return (
    <Grid className={classes.root}>
      {/*<section>{post.image}</section>*/}
      <header className={classes.header}>
        <aside className={classes.desc}>
          <Typography variant="h3">{post.title}</Typography>
          <Typography variant={"h6"}>written by: <span>{post.author.firstName} {post.author.lastName}</span>
          </Typography>
          <Typography variant={"caption"}>published: <span>{post.createdAt}</span>
          </Typography>
          <Typography variant={"caption"}>category: {post.category}</Typography>
        </aside>
      </header>

      <main className={classes.main}>{post.body}</main>

      <footer className={classes.footer}>
        <Typography>Likes: {post.likes}</Typography>
      </footer>
    </Grid>
  )
};

export default PublicVlogView

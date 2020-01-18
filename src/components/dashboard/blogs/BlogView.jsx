import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {useParams} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {GET_BLOG_POST} from "../../../helpers/postQueries.gql";
import Loader from "../../loader/Loading.component";
import Error from '../../error/Error.component';
import Button from "@material-ui/core/Button";
import {useStyles} from "../../../styles/blog/blogView.styles";

const BlogView = () => {
  const classes = useStyles();
  const {blog_id} = useParams();
  const {loading, error, data} = useQuery(GET_BLOG_POST, {
    variables: {id: blog_id}
  });

  if (loading) return <Loader />;
  if (error) return <Error errText={error} />;

  const post = data && data.getPost;

  return (
    <Grid className={classes.root}>
      {/*<aside className={classes.imageSpace}>*/}
      {/*  <section className={classes.imageBox} />*/}
      {/*  <Typography variant={"caption"}>photo credits: unsplash</Typography>*/}
      {/*</aside>*/}
      {/*<section>{post.image}</section>*/}
      <header className={classes.header}>
        <aside className={classes.desc}>
          <Typography variant="h3">{post.title}</Typography>
          <Typography variant={"h6"}>written by: <span>{post.author.firstName} {post.author.lastName}</span>
          </Typography>
          {
            post.isPublished ? (
              <Typography variant={"caption"}>published: <span>{post.createdAt}</span>
              </Typography>
            ) : (
              <Typography variant={"caption"}>last updated: <span>{post.createdAt}</span>
              </Typography>
            )
          }

        </aside>
        <aside className={classes.actions}>
          <div>
            <Typography variant={"h6"}>{post.isPublished ? 'Published' : 'Draft'}</Typography>
            {!post.isPublished && <Button variant={"outlined"}>Publish Now</Button>}
          </div>
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

export default BlogView

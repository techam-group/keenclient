import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import {useParams, useLocation} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import {GET_BLOG_POST} from "../../helpers/postQueries.gql";
import Loader from "../loader/Loading.component";
import Error from '../error/Error.component';
import {useStyles} from "../../styles/blog/postView.styles";
import {formatDate} from "../../helpers/utils";
import GeneralLayout from "../auth/GeneralLayout";

const PostView = () => {
  const location = useLocation();
  const hasState = !!location.state;
  const {post} = hasState && location.state;
  const styleProps = {
    postImage: post.imageUrl
  };
  const classes = useStyles(styleProps);
  // const {loading, error, data} = useQuery(GET_BLOG_POST, {
  //   variables: {id: blog_id}
  // });

  // if (loading) return <Loader />;
  // if (error) return <Error errText={error} />;
  //
  // const post = data && data.getPost;

  return (
    <GeneralLayout>
      <aside className={classes.imageSpace}>
        <section className={classes.imageBox} />
        <Typography variant={"caption"}>photo credits: unsplash</Typography>
      </aside>

      <div className={classes.root}>
        <header className={classes.header}>
          <aside className={classes.desc}>
            <Typography variant="h3">{post.title}</Typography>
            {/*<Typography variant={"h6"}>written by: <span>{post.author.firstName} {post.author.lastName}</span>*/}
            {/*</Typography>*/}
            <Typography variant={"h6"}>written by: <span>{post.author}</span>
            </Typography>
            <Typography variant={"h6"}>published: <span>{formatDate(post.createdAt)}</span>
            </Typography>
            <Typography variant={"caption"}>category: {post.category}</Typography>
          </aside>
        </header>

        <main className={classes.main}>{post.body}</main>

        <footer className={classes.footer}>
          <Typography>Likes: {post.likes}</Typography>
        </footer>
      </div>
    </GeneralLayout>
  )
};

export default PostView

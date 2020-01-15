import React from 'react';
import GeneralLayout from "../components/auth/GeneralLayout";
import {Grid} from "@material-ui/core";
import PostItem from "../components/post-item/PostItem.component";
import {useStyles} from "../styles/blog/blog.styles";
import {posts} from "../helpers/posts";

const Blog = () => {
  const classes = useStyles();

  return (
    <GeneralLayout>
      <Grid className={classes.root}>
        <PostItem posts={posts}/>
      </Grid>
    </GeneralLayout>
  )
};

export default Blog;

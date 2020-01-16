import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_BLOG_POSTS} from "../../../helpers/postQueries.gql";
import Error from '../../error/Error.component';
import Loading from '../../loader/Loading.component';

const AllBlogs = () => {
  const {data, loading, error} = useQuery(GET_ALL_BLOG_POSTS);

  if (loading) return <Loading />;
  if (error) return <Error errText={error.message} />;

  const posts = data && data.getUserPosts;

  const Posts = () =>
    posts.map(post => (
      <p key={post.id}>{post.title}</p>
    ));

  console.log('posts', posts);

  return (
    <Grid>
      <Typography variant="h5">All Blogs</Typography>

      {
        posts.length ? (
          <Posts />
        ) : <p>no posts</p>
      }
    </Grid>
  )
};

export default AllBlogs

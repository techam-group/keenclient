import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import {useQuery} from "@apollo/react-hooks";
import {GET_ALL_BLOG_POSTS} from "../../../helpers/postQueries.gql";
import Error from '../../error/Error.component';
import Loading from '../../loader/Loading.component';

const AllBlogs = () => {
  // const {data, loading, error} = useQuery(GET_ALL_BLOG_POSTS);
  let loading = true;

  if (loading) return <Loading />;
  // if (error) return <Error errText={error.message} />;

  // const posts = data && data.getAllUserPublishedPosts;

  // console.log('posts', posts);

  return (
    <Grid>
      <Typography variant="h5">All Blogs</Typography>
    </Grid>
  )
};

export default AllBlogs

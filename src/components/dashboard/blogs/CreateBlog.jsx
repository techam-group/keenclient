import React from 'react'
import { Grid } from '@material-ui/core'
import CreateBlogForm from '../../forms/CreateBlog.form'

import { useStyles } from '../../../styles/createBlog/createBlog.styles'

const CreateBlog = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.createBlog}>
      <CreateBlogForm />
    </Grid>
  )
};

export default CreateBlog

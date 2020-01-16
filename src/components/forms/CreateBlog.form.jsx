import React, { Fragment } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { FormGroup, Grid, Typography, Paper, TextField, FormHelperText, MenuItem, FormControlLabel, Switch, Button, CircularProgress } from '@material-ui/core';
import { ToastMessage, type } from '../toaster/ToastMessage';
import { useStyles } from '../../styles/createBlog/createBlogForm.styles'
import {CREATE_BLOG_POST, GET_ALL_BLOG_POSTS} from "../../helpers/postQueries.gql";
import {useMutation} from "@apollo/react-hooks";
import {useLocation} from 'react-router-dom';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Blog title is required")
    .min(4),
  category: yup.string().min(4),
  image: yup.string().min(4),
  isPublished: yup.boolean(),
  body: yup.string().min(4)
});

const categories = [
  {
    value: "blog",
    label: 'Blog'
  },
  {
    value: "tutorial",
    label: 'Tutorial'
  },
  {
    value: "series",
    label: 'Series'
  },
  {
    value: 'vlog',
    label: 'vlog'
  }
];

const CreateBlogForm = ({mode}) => {
  const classes = useStyles();
  const location = useLocation();
  const [createBlogPost] = useMutation(CREATE_BLOG_POST);

  const hasState = !!location.state;
  const {post} = hasState && location.state;

  const initialValues = hasState ? {
    title: post.title,
    body: post.body,
    category: post.category,
    image: post.image,
    isPublished: post.isPublished
    } : {
    title: '',
    body: '',
    category: '',
    image: '',
    isPublished: false,
  };

  return (
    <Fragment>
      <Grid component={Paper} elevation={1} className={classes.paper}>
        <header>
          {mode === "new" && <Typography variant="h5">Create a new blog post</Typography>}
          {mode === "update" && <Typography variant="h5">Update Post</Typography>}
        </header>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              await createBlogPost({
                variables: {...values},
                refetchQueries: [{query: GET_ALL_BLOG_POSTS}]
              });

              resetForm();
              ToastMessage(type.SUCCESS, 'Created blog successfully');
            } catch (e) {
              console.log('error', e);
              ToastMessage(type.ERROR, e.message.split(':')[1]);
              setSubmitting(false)
            }
          }}
        >
          {
            ({
               errors,
               touched,
               handleBlur,
               handleSubmit,
               isSubmitting,
               handleChange,
               values: { title, category, isPublished, body, image },
             }) => (
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className={classes.formControls}>
                  <FormGroup>
                    <TextField
                      required
                      fullWidth
                      type='text'
                      name="title"
                      value={title}
                      margin="normal"
                      label="Blog Title"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Blog Title"
                      error={errors.title && touched.title}
                    />
                    {
                      errors.title && touched.title && (
                        <FormHelperText className={classes.errorFeedback}>{errors.title}</FormHelperText>
                      )
                    }
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      select
                      fullWidth
                      margin="normal"
                      name="category"
                      value={category}
                      onBlur={handleBlur}
                      label="Blog Category"
                      placeholder="Category"
                      onChange={handleChange}
                      error={errors.category && touched.category}
                      SelectProps={{
                        MenuProps: {
                          className: classes.menu,
                        },
                      }}
                    >
                      {
                        categories.map(option => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))
                      }
                    </TextField>
                    {
                      errors.category && touched.category && (
                        <FormHelperText className={classes.errorFeedback}>{errors.category}</FormHelperText>
                      )
                    }
                  </FormGroup>
                </div>
                <FormGroup>
                  <TextField
                    fullWidth
                    type="text"
                    name="image"
                    value={image}
                    margin="normal"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter image url"
                    error={errors.image && touched.image}
                  />
                  {
                    errors.image && touched.image && (
                      <FormHelperText className={classes.errorFeedback}>{errors.image}</FormHelperText>
                    )
                  }
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        color="primary"
                        value={isPublished}
                        checked={isPublished}
                        onChange={handleChange('isPublished')}
                      />
                    }
                    label="Publish Now"
                  />
                </FormGroup>
                <FormGroup>
                  <TextField
                    rowsMax='4'
                    multiline
                    name='body'
                    value={body}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {
                    errors.body && touched.body && (
                      <FormHelperText className={classes.errorFeedback}>{errors.body}</FormHelperText>
                    )
                  }
                </FormGroup>

                <div className={classes.spacing} />

                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  className={classes.button}
                >
                  {isSubmitting ? <CircularProgress /> : (mode === 'new' ? 'Create Post' : 'Update Post')}
                </Button>
              </form>
            )
          }
        </Formik>
      </Grid>
    </Fragment>
  )
};

export default CreateBlogForm

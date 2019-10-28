import React, { Fragment } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { FormGroup, Grid, Typography, Paper, TextField, FormHelperText, MenuItem, FormControlLabel, Switch, Button, CircularProgress } from '@material-ui/core'
import { ToastMessage, type } from '../toaster/ToastMessage'

import { useStyles } from '../../styles/createBlog/createBlogForm.styles'

const initialState = {
  title: '',
  body: '',
  category: '',
  image: '',
  isPublished: null,
  // checkedB: false
}

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required("Blog title is required")
    .min(4),
  category: yup
    .string()
    .min(4),
  image: yup
    .string()
    .min(4),
  isPublished: yup.boolean(),
  body: yup
    .string()
    .min(4)
})

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
    value: "quiz",
    label: 'Quiz'
  },
  {
    value: "article",
    label: 'Article'
  }
]

const CreateBlogForm = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <Grid component={Paper} elevation={1} className={classes.paper}>
        <header>
          <Typography variant="h5">Create a new blog post</Typography>
        </header>

        <Formik
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            alert('working tho')

            resetForm()

            ToastMessage(type.SUCCESS, 'Created blog successfully')

            console.log('values are => ', values)
          }}
          render={({
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
                        value="checkedB"
                        checked={isPublished}
                        onChange={handleChange('checkedB')}
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
                  {isSubmitting ? <CircularProgress /> : 'Create Post'}
                </Button>
              </form>
            )}
        />
      </Grid>
    </Fragment>
  )
}

export default CreateBlogForm
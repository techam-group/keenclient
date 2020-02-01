import React from 'react';
import GeneralLayout from "../components/auth/GeneralLayout";
import {
  CircularProgress,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import {useStyles} from "../styles/contact-us/contactUs.styles";
import {Formik} from 'formik';
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import {ToastMessage, type} from "../components/toaster/ToastMessage";

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3),
  email: Yup.string().email().required('Please provide your email'),
  message: Yup.string().min(8).required('Please provide your message to us')
});

const ContactUs = () => {
  const classes = useStyles();

  return (
    <GeneralLayout>
      <section className={classes.imageBox} />

      <Grid className={classes.root}>
        <Typography variant={"h6"}>We would love to hear from you</Typography>

        <section className={classes.formHolder}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm, setSubmitting}) => {
              console.log('values', values);

              resetForm();
              setSubmitting(false);
              ToastMessage(type.SUCCESS, "Your message has been sent, our team will contact you soon")
            }}
          >
            {
              ({
                 handleBlur,
                 handleChange,
                 isSubmitting,
                 touched,
                 errors,
                 handleSubmit,
                 values: {name, email, message}
               }) => (
                <form onSubmit={handleSubmit} className={classes.form}>
                  <FormGroup>
                    <TextField
                      value={name}
                      name={"name"}
                      type={"text"}
                      label={"Name"}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.name && touched.name}
                    />
                    {
                      errors.name && touched.name && (
                        <FormHelperText className={classes.error}>
                          {errors.name}
                        </FormHelperText>
                      )
                    }
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      value={email}
                      type={"email"}
                      name={"email"}
                      label={"Email"}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email && touched.email}
                    />
                    {
                      errors.email && touched.email && (
                        <FormHelperText className={classes.error}>
                          {errors.email}
                        </FormHelperText>
                      )
                    }
                  </FormGroup>

                  <FormGroup>
                    <TextField
                      multiline
                      rows={5}
                      type={"text"}
                      value={message}
                      name={"message"}
                      label={"Message"}
                      onBlur={handleBlur}
                      variant={"outlined"}
                      onChange={handleChange}
                      error={errors.message && touched.message}
                    />
                    {
                      errors.message && touched.message && (
                        <FormHelperText className={classes.error}>
                          {errors.message}
                        </FormHelperText>
                      )
                    }
                  </FormGroup>

                  <FormGroup>
                    <Button
                      variant={"outlined"}
                      type={"submit"}
                      disabled={!message || !email || isSubmitting}
                    >
                      {isSubmitting ? <CircularProgress /> : 'Send Now'}
                    </Button>
                  </FormGroup>
                </form>
              )
            }
          </Formik>
        </section>
      </Grid>
    </GeneralLayout>
  )
};

export default ContactUs;

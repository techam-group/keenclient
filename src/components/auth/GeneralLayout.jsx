import React from 'react';
import {CssBaseline, Grid} from "@material-ui/core";
import Footer from "../shared/footer/Footer";
import AppBar from "../shared/header/appBar/AppBar";
import {useStyles} from "../../styles/authLayout/generalLayout.styles";

export default ({children}) => {
  const classes = useStyles();

  return (
    <Grid>
      <CssBaseline />
      <AppBar/>
      <main className={classes.main}>
        {children}
      </main>
      <Footer/>
    </Grid>
  )
}

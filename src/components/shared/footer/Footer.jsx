import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@material-ui/core';
import InputWithButton from '../../text-inputs/InputWithButton'

import { useStyles } from '../../../styles/footer/footer.styles'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.footerMain}>
      <Grid item>
        <Link to="/">
          <Typography variant="h6">keencademics</Typography>
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="h6">Links</Typography>
        <ul>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/videos">
            <li>Videos</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact</li>
          </Link>
          <Link to="/premium">
            <li>Premium Members</li>
          </Link>
        </ul>
      </Grid>
      <Grid item>
        <Typography variant="h6">Subscribe</Typography>

        <InputWithButton
          btnText="Join Now"
          placeholder="Enter your email"
        />
      </Grid>
      <Grid container className={classes.footer_cta}>
        <Typography>
          keencademics&copy; {' '}
          {moment().format('YYYY')}. {' '}
          Built with ❤️ by <strong>Techam</strong>
        </Typography>
      </Grid>
    </Grid>
  )
}
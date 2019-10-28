import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import moment from 'moment'
import { useStyles } from '../../../styles/footer/plainFooter.styles'

export default (props) => {
  const classes = useStyles(props)

  return (
    <Grid container className={classes.root}>
      <Typography>
        keencademics&copy; {' '}
        {moment().format('YYYY')}. {' '}
        Built with ❤️ by <strong>Techam</strong>
      </Typography>
    </Grid>
  )
}
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none',

    '& > h6': {
      fontWeight: 600,

      '& > span': {
        fontWeight: 200
      }
    }
  },
  header: {
    backgroundColor: '#40a3c8',

    '& a': {
      textDecoration: 'none',
      color: 'inherit'
    }
  }
}));
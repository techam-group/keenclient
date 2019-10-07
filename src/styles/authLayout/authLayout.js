import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '100vh',
    background: '#007991',
    background: '-webkit-linear-gradient(to right, #78ffd6, #007991)',
    background: 'linear-gradient(to right, #78ffd6, #007991)'
  },
  paper: {
    width: '60%',
    height: '65vh',
    display: 'flex',
  }
})
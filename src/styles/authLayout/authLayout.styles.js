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
    background: props => props.signup ? 'linear-gradient(to right, #abd4ff, #007991)' : 'linear-gradient(to right, #78ffd6, #007991)'
  },
  paper: {
    width: '60%',
    minHeight: '65vh',
    display: 'flex',
    boxSizing: 'border-box'
  }
})
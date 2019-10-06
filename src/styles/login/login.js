import { makeStyles } from '@material-ui/core/styles'
import LoginBGImage from '../../assets/vector/login.jpg'

export const useStyles = makeStyles({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    height: '100vh'
  },
  paper: {
    width: '60%',
    height: '65vh',
    display: 'flex',
  },
  imageHolder: {
    backgroundImage: `url(${LoginBGImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '70%',
    height: '100%'
  },
  formInputs: {
    padding: '1rem',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'space-around',
    flexDirection: 'column'
  }
})
import { makeStyles } from '@material-ui/core/styles'
import BngLanding from '../../assets/images/girl-with-bag.jpg'

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  main: {
    backgroundImage: `url(${BngLanding})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 20%',
    padding: '0 4rem',
    margin: '4rem auto 0',
    backgroundColor: '#3f94b5',
    height: '82vh',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '1px 3px 3px 0px rgba(0, 0, 0, 0.3)',

    '&::before': {
      backgroundColor: 'rgba(116, 139, 149, 0.39)',
      content: "''",
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'absolute'
    }
  },
  lead: {
    color: '#fafcff',
  },
  getStarted: {
    backgroundColor: '#094b65',
    marginTop: '1rem',
    color: 'aliceblue',

    '&:hover': {
      backgroundColor: '#236a86',
    }
  },
  raise: {
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  }
});
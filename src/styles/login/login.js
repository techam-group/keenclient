import { makeStyles } from '@material-ui/core/styles'
import LoginBGImage from '../../assets/vector/login.jpg'

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
  },
  imageHolder: {
    backgroundImage: `url(${LoginBGImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '70%',
    height: '100%',
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem'
  },
  loginHolder: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem 0.5rem 4rem',
  },
  formInputs: {
    padding: '1rem',
    height: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',

    '& svg': {
      color: 'grey'
    },

    '& .MuiIconButton-edgeEnd:hover': {
      background: 'none'
    }
  },
  button: {
    background: '#00eac4',
    border: '1px solid #00eac4',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '1rem',

    '&.MuiButton-outlined.Mui-disabled': {
      background: '#00eac4',
      border: '1px solid #00eac4'
    },

    '&:hover': {
      border: '1px solid #00bb9c',
      background: '#00bb9c'
    },

    '& .MuiCircularProgress-indeterminate': {
      height: '24px !important',
      width: '24px !important',

      '& svg': {
        color: 'white'
      }
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '88%',
    flexWrap: 'wrap',

    '& a': {
      color: 'grey',
      textDecoration: 'none'
    },

    '& :hover': {
      color: '#00bb9c'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%'
  }
})
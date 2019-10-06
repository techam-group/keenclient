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
    
    '&:hover': {
      border: '1px solid #00bb9c',
      background: '#00bb9c'
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
  iconHeader: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',

    '& .icons': {
      borderRadius: '50%',
      border: '1px solid #acacac',
      height: '3.5rem',
      width: '3.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '&::before': {
        content: "''",
        border: '1px solid #acacac',
        width: '310%',
        position: 'absolute',
        top: '36%'
      },

      '&::after': {
        content: "''",
        border: '1px solid white',
        width: '93.12%',
        position: 'absolute',
        top: '36%'
      },

      '& svg': {
        color: '#acacac',
        fontSize: '2rem',
        zIndex: 1000
      }
    },

    '& p': {
      color: '#acacac'
    }
  }
})
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '28rem',
    display: 'flex',
    alignItems: 'center',

    '& .MuiPaper-rounded:hover': {
      transform: 'translateX(0px)', 
    },


    '& p': {
      color: 'grey'
    }
  },
  imageHolder: {
    width: '50%',
    height: '100%',
    backgroundImage: props => `url(${props.imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  paper: {
    flexGrow: 1,
    height: '50%',
    maxWidth: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 3rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transform: 'translateX(-80px)',
    transformStyle: 'preserve-3d',
    transition: '0.3s ease-in',

    '& h5': {
      fontWeight: 500,
      marginBottom: '1rem',
      color: '#595959'
    },

    '& p': {
      lineHeight: 1.5
    }
  }
})
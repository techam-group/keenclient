import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '20rem',
    display: 'flex',
    alignItems: 'center',
    flexDirection: props => props.inverted ? 'row-reverse' : 'row',

    '& .MuiPaper-rounded:hover': {
      transform: props => props.inverted ? 'translateX(40px)' : 'translateX(-60px)', 
    },

    '& p': {
      color: 'grey'
    }
  },
  imageHolder: {
    width: '50%',
    height: '100%',
    marginLeft: props => props.inverted ? 0 : '12%',
    marginRight: props => props.inverted ? '12%' : 0,
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
    height: '60%',
    maxWidth: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 3rem',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    transform: props => props.inverted ? 'translateX(60px)' : 'translateX(-80px)',
    transformStyle: 'preserve-3d',
    transition: '0.3s ease-in',

    '& h5': {
      fontWeight: 500,
      marginBottom: '1rem',
      color: '#494f81'
    },

    '& p': {
      lineHeight: 1.5,
      color: '#748da2'
    }
  }
})
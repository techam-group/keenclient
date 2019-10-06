import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '28rem',
    display: 'flex',
    alignItems: 'center',

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
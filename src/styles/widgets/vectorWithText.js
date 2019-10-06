import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '28rem',

    '& p': {
      color: 'grey'
    }
  },
  imageHolder: {
    width: '50%',
    height: '100%',
    background: props => props.imgSrc
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
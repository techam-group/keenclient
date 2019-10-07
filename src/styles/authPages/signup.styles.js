import { makeStyles } from '@material-ui/core/styles'
import regBGImage from '../../assets/vector/regBgn.jpg'

export const useStyles = makeStyles({
  imageHolder: {
    backgroundImage: `url(${regBGImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    width: '70%',
    borderTopLeftRadius: '2rem',
    borderBottomLeftRadius: '2rem'
  },
  regHolder: {
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%'
  },
  errorFeedback: {
    color: '#d25151',
    marginBottom: '0.5rem'
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
    color: 'grey',
    alignItems: 'center',

    '& a': {
      textDecoration: 'none',
      color: 'grey',

      '&:hover': {
        color: '#00bb9c'
      }
    }
  },
  formGroup: {
    width: '100%'
  }
})
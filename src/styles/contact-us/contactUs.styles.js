import {makeStyles} from "@material-ui/core";
import ContactUsBng from '../../assets/images/come-along.jpg';

export const useStyles = makeStyles({
  root: {
    textAlign: 'center',

    '& h6': {
      margin: '1.8rem auto',
      textTransform: 'capitalize',
      color: '#727272'
    }
  },
  imageBox: {
    backgroundImage: `url(${ContactUsBng})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '34vh',
    marginTop: '-0.5em',
  },
  formHolder: {
    width: '60%',
    margin: '0 auto',
    padding: '1rem'
  },
  form: {
    '& .MuiFormControl-root': {
      marginBottom: '1.3rem',
    },

    '& .MuiFormGroup-root:nth-child(3)': {
      marginTop: '1.3rem'
    },

    '& .MuiFormGroup-root:last-child': {
      margin: '1.8rem 0.3rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& button': {
        background: '#2a7c9b',
        width: 'max-content',
        color: '#f3f3f3'
      },

      '& .MuiCircularProgress-indeterminate': {
        height: '24px !important',
        width: '24px !important',

        '& svg': {
          color: '#F3F3F3'
        }
      },

      '& .MuiButtonBase-root.Mui-disabled': {
        opacity: 0.4
      }
    }
  },
  error: {
    color: '#f44336',
    marginTop: '-0.5rem'
  }
});

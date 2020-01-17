import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  paper: {
    minWidth: '80%',
    padding: '1.5rem'
  },
  menu: {
    width: 200,
  },
  errorFeedback: {
    color: '#d25151',
    marginBottom: theme.spacing(1)
  },
  button: {
    background: '#047d93',
    border: '1px solid #047d93',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '1rem',

    '&.MuiButton-outlined.Mui-disabled': {
      background: '#00eac4',
      border: '1px solid #00eac4'
    },

    '&.MuiButton-contained.Mui-disabled': {
      backgroundColor: '#2990a3',
      border: '1px solid #2990a3',
    },

    '&:hover': {
      border: '1px solid #056779',
      background: '#056779'
    },

    '& .MuiCircularProgress-indeterminate': {
      height: '24px !important',
      width: '24px !important',

      '& svg': {
        color: 'white'
      }
    }
  },
  spacing: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  formControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },

    '& .MuiFormGroup-root:nth-child(1)': {
      flexGrow: 1,
      paddingRight: '1rem',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: 0
      },
    },

    '& .MuiFormGroup-root:nth-child(2)': {
      flexGrow: 1,

      [theme.breakpoints.down('sm')]: {
        width: '100%'
      }
    },
  },
}));

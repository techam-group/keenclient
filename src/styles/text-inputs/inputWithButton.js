import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    border: '1px solid #396e82',
    borderRadius: '3px'
  },
  input: {
    paddingLeft: '0.3rem',
    color: '#7dc0d9',

    '&::placeholder': {
      color: 'inherit'
    },

    '&::focus': {
      borderBottom: 0,
      outline: 'none'
    },

    '&::before': {
      borderBottom: 0
    },

    '&:hover :before': {
      borderBottom: 0
    }
  },
  button: {
    background: '#6e9fb0',
    borderRadius: 0,

    '&:hover': {
      opacity: 0.7,
      background: '#6e9fb0'
    }
  }
})
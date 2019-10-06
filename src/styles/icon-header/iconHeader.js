import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles({
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
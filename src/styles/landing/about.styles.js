import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  main: {
    height: '50vh',
    justifyContent: 'center',
    padding: '4rem',
    backgroundColor: '#f7f7f7',

    '& > h4': {
      fontSize: '3.3rem',
      color: '#454a4c'
    }
  },
  itemGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },
  gridItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg': {
      fontSize: '4.5rem',
      color: '#8e8e8e',
      paddingBottom: '1rem'
    }
  }
})
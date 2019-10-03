import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  footerMain: {
    background: '#154759',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    color: '#f7f7f7',

    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },

    '& h6': {
      paddingBottom: '0.6rem',
      color: '#7dc0d9',
      fontWeight: 600
    },

    '& ul': {
      margin: 0,
      padding: 0,

      '& li': {
        listStyle: 'none',
        lineHeight: 2,
        color: '#76a7b9',
      }
    },

    '& .MuiGrid-item:nth-child(1)': {
      alignSelf: 'center'
    }
  },
  footer_cta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#133744',
    padding: '1rem',
    color: '#4c99b5',
    marginTop: '1.5rem'
  }
})

import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    flex: 1,
    width: '80%',
    margin: '0 auto',
    color: '#464646'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2rem'
  },
  desc: {
    width: '80%',

    '& h3': {
      paddingBottom: '0.3em',
    },

    '& h6': {
      fontSize: '0.8em',

      '& span': {
        fontSize: '1em',
        fontWeight: 600
      }
    }
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
    width: '20%',

    '& > div': {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      width: '100%',

      '& h6': {
        fontSize: '1em'
      },

      '& button': {
        color: '#047d93',
        fontSize: '0.6em',
        marginLeft: '1.5em'
      },

      '& .MuiButton-outlined': {
        border: '1px solid #8bb4bb',
        padding: '0.5em 0.4em'
      }
    }
  },
  main: {
    padding: '1em 0'
  },
  footer: {
    marginTop: '1em'
  }
});

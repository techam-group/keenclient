import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  main: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 300,
    margin: '1.5rem 1.5rem',

    '& h6': {
      color: '#40a3c8'
    }
  },
  actions: {
    padding: '0.675em 1.2em',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  author: {
    '& .MuiTypography-body1': {
      fontSize: '0.9em',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& span': {
      fontSize: '0.765em'
    }
  },
  socials: {
    '& .MuiIconButton-root': {
      padding: 4,
      fontSize: '1.123em'
    }
  }
});

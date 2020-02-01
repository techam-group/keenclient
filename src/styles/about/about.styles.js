import {makeStyles} from "@material-ui/core";
import ContactUsBng from '../../assets/images/bng-landing.jpg';

export const useStyles = makeStyles({
  root: {
    textAlign: 'center',

    '& h5': {
      margin: '1.8rem auto',
      textTransform: 'capitalize',
      color: '#727272'
    },
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
  info: {
    width: '70%',
    margin: '0 auto 2rem',
  },
  aboutOwner: {
    margin: '0.4rem auto 1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 345,
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
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',

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

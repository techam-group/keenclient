import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
  "@keyframes load": {
    "0%" : {
      opacity: 0,
      color: 'green'
    },
    "50%" : {
      opacity: 1,
      color: '#444'
    },
    "100%" : {
      opacity: 0,
      color: 'red'
    },
  },
  error: {
    height: '85vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',

    '& svg': {
      fontSize: '2.5rem',
      color: "#ff4a4a"
    },

    "& > h4": {
      transition: '1s ease-in-out',
      animationName: "$load",
      animationDuration: '2s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite'
    },
  }
});

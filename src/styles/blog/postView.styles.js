import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    flex: 1,
    width: '80%',
    margin: '1em auto',
    color: '#464646'
  },
  imageSpace: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'grey'
  },
  imageBox: {
    backgroundImage: props => `url(${props.postImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
    height: '65vh',
    marginTop: '-0.5em',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '2rem'
  },
  desc: {
    width: '100%',

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
  main: {
    padding: '0.5em 0 1em',
    lineHeight: '2',
    fontSize: '1.2em',
    textAlign: 'justify'
  },
  footer: {
    marginTop: '1em'
  }
});

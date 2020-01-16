import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  Loader: {
    background: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '75vh',

    '& .MuiCircularProgress-colorPrimary': {
      color: '#047d93'
    }
  }
}));

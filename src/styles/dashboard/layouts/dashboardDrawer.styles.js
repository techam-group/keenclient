import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: '#092024',
    color: '#fcfcfc',
    width: drawerWidth,

    '& .MuiList-root': {
      '& a': {
        color: '#90d1dd',
        textDecoration: 'none'
      }
    },

    '& .MuiListItemIcon-root': {
      color: '#54a6b5'
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor: '#011d22',

    '& .MuiIconButton-label': {
      color: '#fcfcfc'
    }
  },
  selected: {
    backgroundColor: '#09444f',

    '&:hover': {
      backgroundColor: '#09444f',
    }
  }
}));

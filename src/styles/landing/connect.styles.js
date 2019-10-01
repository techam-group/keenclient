import { makeStyles } from '@material-ui/core/styles'

import CommunityImage from '../../assets/images/learning-com-table.jpg'

export const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  main: {
    backgroundImage: `url(${CommunityImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '36rem',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',

    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.39)',
      content: "''",
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'absolute'
    },

    '& h3': {
      color: '#f9f9f9',
      zIndex: 100
    },

    '& button': {
      background: 'white',
      marginTop: '1.845rem',

      '&:hover': {
        opacity: '0.8',
        backgroundColor: 'white'
      }
    }
  }
}))
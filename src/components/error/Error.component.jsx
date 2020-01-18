import React from 'react';
import {MdWarning as WarningIcon} from 'react-icons/md';
import {useStyles} from "../../styles/error/error.styles";

export default ({errText}) => {
  const classes = useStyles();

  return (
    <div className={classes.error}>
      <WarningIcon/>
      <h4 style={{fontWeight: 100}}>Oops!! an error occurred. <strong><em>"{errText}"</em></strong>.</h4>
    </div>
  )
};

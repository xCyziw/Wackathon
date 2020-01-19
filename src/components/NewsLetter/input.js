import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Inputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
           <Input variant='filled' label="First Name" inputProps={{ 'aria-label': 'description' }} />
           <Input variant='filled' label="Last Name" inputProps={{ 'aria-label': 'description' }} />
            <Input variant='filled' label="Email" inputProps={{ 'aria-label': 'description' }} />
    </form>
    
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <div >
            <div style={{ 'fontSize' : '10px'}} >
              Note: If Accuracy is not good, goto <a href="https://www.google.com/maps">www.googlemaps.com</a>, zoom to your current location and come back to konect!
            </div>
            
       </div>
    </div>
  );
}

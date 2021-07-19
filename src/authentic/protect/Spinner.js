import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
   main: {
    marginTop: theme.spacing(25),
    marginBottom: theme.spacing(2),
  }
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  
  return (
     <Grid container spacing={0}   className={classes.root} >
        <Grid item xs={12} sm={12} md={12}>
         <Container component="main" className={classes.main} maxWidth="sm">
                <div >
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
      </Container>
         </Grid>
    </Grid>
    
  );
}

            
            //       <div className="spinner-grow text-dark" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-primary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-secondary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-success" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-danger" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-warning" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-info" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-light" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-dark" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-primary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-secondary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-success" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-danger" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-warning" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-info" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-light" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //   </div>
            //       <div className="spinner-grow text-dark" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-primary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-secondary" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-success" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-danger" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-warning" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-info" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-light" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            //       <div className="spinner-grow text-dark" role="status">
            //         <span className="sr-only">Loading...</span>
            //       </div>
            // 
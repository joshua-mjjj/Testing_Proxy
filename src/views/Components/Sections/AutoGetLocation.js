import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import GeoComponent from './GeoComponent.js';
import Accuracy from './Accuracy.js';
import MapTest_User from './MapTest_User.js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function HomeTestComponent(props) {
  const classes = useStyles();

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [permission, setPermission] = useState('false');

  const get = (lat, lon) => {
     setLatitude(lat)
     setLongitude(lon)
    
     // console.log(latitude)
     // console.log(longitude)
    }
  const handleAutofill = async (e) => {
    e.preventDefault()
    console.log(latitude)
    console.log(longitude)
    props.getLocationDetails(latitude, longitude)

    let startLoc = '"' + latitude + ',' + longitude + '"';
    let destLoc = '"' + latitude + ',' + longitude + '"';
    const Google_Map_Key = "AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI"

    let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destLoc}&key=${Google_Map_Key}`
    // let cors_proxy = 'https://cors-proxy.dev.exicube.com/';
    //  let cors_proxy = 'https://homepetvet.herokuapp.com/';
    // url = cors_proxy + url;
    let response = await fetch(url)
    // let response = await axios.get(url)
    let json = await response.json();
    console.log(json)
    // if (json.routes && json.routes.length > 0) {
    //     return {
    //         distance:json.routes[0].legs[0].distance.value,
    //         duration:json.routes[0].legs[0].duration.value,
    //         polylinePoints:json.routes[0].overview_polyline.points
    //     }
    // }

  }

  const Locate = (e) => {
    e.preventDefault()
    setPermission('true')
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {
        latitude ? (
           <Grid item xs={12} sm={4} md={7} component={Paper} elevation={5} square>
            <MapTest_User  
            google={props.google}
            center={{lat: parseFloat(latitude), lng: parseFloat(longitude) }}
            //center={{lat:  0.3244032, lng: 32.5943296 }}
            height='500px'
            zoom={14}
          /> 
         </Grid>    
        ):  <Grid item xs={12} sm={4} md={7} className={classes.image} >  </Grid>   
      }
      
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={5} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddLocationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Your Location.
          </Typography>
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={Locate}
              className={classes.submit}>
              Get Location
            </Button>

            <div>
            {
              permission === 'true' ? (
                <div>
                 <GeoComponent getLocation={get} />
                </div>
                
              ): ''
            } 
          </div>
          <div>
            {
              latitude ? (
                <div>
                 <Accuracy />
                 <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick = {handleAutofill}
                  className={classes.submit}>
                  Auto fill
                </Button>
                </div>
                
              ): ''
            } 
          </div>

          </form>
        </div>
      </Grid>
    </Grid>
  );
}
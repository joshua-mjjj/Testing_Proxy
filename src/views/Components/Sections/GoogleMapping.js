import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";

import LocationOn from "@material-ui/icons/LocationOn";
import image1 from "assets/img/bg.jpg";




import Carousel from "react-slick";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import { makeStyles } from "@material-ui/core/styles";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const classes = makeStyles(styles);
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

Geocode.setApiKey("AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI");
Geocode.enableDebug();

class GoogleMapping extends React.Component{  
    constructor(props){
         super(props);
         this.state = {
          userPosition: {
               lat: this.props.CurrentPos.lat,
               lng: this.props.CurrentPos.lon
           },
           mapPosition: {
              lat: this.props.center.lat,
              lng: this.props.center.lon
            },
           markerPosition: {
              lat: this.props.center.lat,
              lng: this.props.center.lon
            }

        }
            
         // bindings
         this.handleGoedata = this.handleGoedata.bind(this)

    }
    handleGoedata(e){
       console.log(this.props.Data)
       console.log(this.state.userPosition)
        console.log(this.state.userPosition.lat)
        console.log(this.state.userPosition.lng)
    }
      

   render(){

    const AsyncMap = withScriptjs(
     withGoogleMap(
      props => (
      <GoogleMap 
      
      defaultZoom={15}
      defaultCenter={{ lat: 18.5204, lng: 73.8567 }}>
      </GoogleMap>
      )
     )
    );
        let map;
       if( this.props.center.lat !== undefined ) {
           map = <div>
           <div><h1>Hello world inside
           </h1></div>
          <AsyncMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI=places"
                loadingElement={
                <div style={{ height: `100%` }} />
               }
              containerElement={
               <div style={{ height: '50%' }} />
               }
              mapElement={
               <div style={{ height: `100%` }} />
               }
             />
           </div>
        }else {
        map = <div><h1>Hello world</h1></div>
          }
     return ( map );
    }

}
export default GoogleMapping;
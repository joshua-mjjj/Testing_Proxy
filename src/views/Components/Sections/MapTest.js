import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI");
Geocode.enableDebug();
class MapTest extends React.Component{
constructor( props ){
  super( props );
  this.state = {
   mapPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   },
   markerPosition: {
    lat: this.props.center.lat,
    lng: this.props.center.lng
   }
  }
 }

 shouldComponentUpdate( nextProps, nextState ){
  if (
   		this.state.markerPosition.lat !== this.props.center.lat ||
   		this.state.address !== nextState.address ||
   		this.state.city !== nextState.city ||
   		this.state.area !== nextState.area ||
   		this.state.state !== nextState.state
  		){
   		return true
  }else if ( this.props.center.lat === nextProps.center.lat ){
   		return false
  }
 }
  onInfoWindowClose = ( event ) => {

  };



render(){
    var CordinatesArray = [];
	for(var i = 0; i < this.props.Cords.length; i++){
		 var cordinate = [this.props.Cords.[i].lat, this.props.Cords.[i].lon, this.props.Cords.[i].name];
		 CordinatesArray.push(cordinate);
	}
   
   var flag = this.props.google
   var Close = this.onInfoWindowClose
   console.log(CordinatesArray)

     

	const AsyncMap = withScriptjs(
   	withGoogleMap(
    props => (
     <GoogleMap 
     	google={this.props.google}
      	defaultZoom={this.props.zoom}
      	defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}>

     <Marker 
     		google={this.props.google}
       		name={'Dolores park'}
          	draggable={false}
          	onDragEnd={ this.onMarkerDragEnd }
          	position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
          	icon = {{url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}
      />
      <Marker />
        	{CordinatesArray.map(function(mark, index){
            return(
          	<div key={index} >
           		<Marker 
             	google={flag}
             	name={'Dolores park'}
             	draggable={false}
             	position={{ lat: parseFloat(mark[0]), lng: parseFloat(mark[1]) }}
             />
              <Marker />
            </div>
            )
           }
          )
        }
      
      <InfoWindow
       onClose={this.onInfoWindowClose}
       position={{ lat: ( this.state.markerPosition.lat + 0.0012 ), lng: this.state.markerPosition.lng }}
      >
       <div>
        	<span style={{ padding: 0, margin: 0, color: 'red' }}>
        	Your Current Location<br />
        	{this.state.markerPosition.lat}, 
        	{this.state.markerPosition.lng}
        	</span>
       </div>
      </InfoWindow>
      {CordinatesArray.map(function(mark, index){
            return(
          		<div key={index} >
            		<InfoWindow
       				     onClose={Close}
       				     position={{ lat: ( parseFloat(mark[0]) + 0.0012 ), lng: parseFloat(mark[1]) }}>
           				<div>
            				<span style={{ padding: 0, margin: 0 }}>
            				{mark[2]} <br />
            				</span>
           				</div>
      				</InfoWindow>
        		</div>
             )
           }
          )
        }
</GoogleMap>
)
   )
  );
  
let map;
  if( this.props.center.lat !== undefined ) {
   map = <div>
     	<div>
       		<h4>Konnect Map view.</h4>
       		<h6 style={{ 'fontSize': '14px'}}>This view displays all the Service Providers that are closer to you as seen on the static Map depending the current Location details you fill in the Konnect form.</h6>
     	</div>
     <AsyncMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyATbMLAN6jGPXdmhGQktLH33X80uPBO_xI"
      loadingElement={
       <div style={{ height: `100%` }} />
      }
      containerElement={
       <div style={{ height: this.props.height }} />
      }
      mapElement={
       <div style={{ height: `100%` }} />
      }
     />
    </div>
} else {
   map = <div style={{height: this.props.height}} />
  }
  return( map )
 }
}
export default MapTest
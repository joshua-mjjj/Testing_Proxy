import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

import MapTest from "./MapTest.js";
import MapsButton from "./MapsButton.js";
import AutoGetLocation from './AutoGetLocation.js';
import Face from "@material-ui/icons/Face";

// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import SectionCarousel from "./SectionCarousel.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import ResultsLayout from './ResultsLayout'

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const classes = makeStyles(styles);

class SectionPills extends React.Component{
     
    constructor(props){
         super(props);
         this.state = {

          results:[],
          status: null,

          input_request: {
            lat: '',
            lon: '',
            neighbours: '',
            name: '',
            need: '',
          }
         }
         // bindings
         this.getCookie = this.getCookie.bind(this)
         this.handleLatitudeChange = this.handleLatitudeChange.bind(this)
         this.handleLongitudeChange = this.handleLongitudeChange.bind(this)
         this.getCookie = this.getCookie.bind(this)
         this.handleNeighboursChange = this.handleNeighboursChange.bind(this)
         this.handleNameChange = this.handleNameChange.bind(this)
         this.handleNeedChange = this.handleNeedChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.getCurrentPos = this.getCurrentPos.bind(this)
         this.getAutofill = this.getAutofill.bind(this)

  };

    getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    } 
    return cookieValue;
    }

      handleSubmit(e){
    e.preventDefault()
    //console.log(this.state.input_request)

    var csrftoken = this.getCookie('csrftoken')
    //var url = 'http://localhost:8000/konnect/backend/api/backend/konnect/clients/user_create/'
    var url = 'https://konect-backend-api.herokuapp.com/konnect/backend/api/backend/konnect/clients/user_create/'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type':'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(this.state.input_request)
    }).then(response => response.json())
       .then(data => 
        this.setState({
          results: data,
        })
      )
      .catch(function(error){
        console.log(error.response)
      })
    }


    handleLatitudeChange(e){
    var value = e.target.value
     //console.log('Value:', value)
    this.setState({
       input_request:{
        ...this.state.input_request,
        lat: value
       }
    })
    }
    handleLongitudeChange(e){
    var value = e.target.value
     //console.log('Value:', value)
    this.setState({
       input_request:{
        ...this.state.input_request,
        lon: value
       }
    })
    }
    handleNeighboursChange(e){
    var value = e.target.value
   // console.log('Value:', value)
    this.setState({
       input_request:{
        ...this.state.input_request,
        neighbours: value
       }
    })
    }
    handleNameChange(e){
    var value = e.target.value
     //console.log('Value:', value)
    this.setState({
       input_request:{
        ...this.state.input_request,
        name: value
       }
    })
    }
    handleNeedChange(e){
    var value = e.target.value
     //console.log('Value:', value)
     //center={{lat: parseFloat(latit), lng: parseFloat(longit) }}
    this.setState({
       input_request:{
        ...this.state.input_request,
        need: value
       }
    })
    }

    getAutofill(autoLat, autoLon){
      console.log("Hey")
      console.log(autoLat)
      console.log(autoLon)
      this.setState({
       input_request:{
        ...this.state.input_request,
        lat: autoLat,
        lon :autoLon
       }
    })

    }
    getCurrentPos(e){
       if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(
           function success(position) {
             // for when getting location is a success
             console.log('latitude', position.coords.latitude, 
                         'longitude', position.coords.longitude);
           },
            function error(error_message) {
              // for when getting location results in an error
              console.error('An error has occured while retrieving location', error_message)
            }  
          )
        }
          else {
        console.log('geolocation is not enabled on this browser')
      }
    }

  render(){
    console.log(this.state.status)
    var neighbours = this.state.results
    var latit = this.state.input_request.lat
    var longit = this.state.input_request.lon

     return (
 <div className="container">
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
        <div >
          <div className={classes.title}>
            <h3 style={{ paddingTop:'30px'}}>Welcome to Konect Platform!</h3>
          </div>
        </div>
          <div className={classes.title}>
            <h3>
              <small>Get Started.</small>
            </h3>
            <p>
              The Konect Platform seeks to empower people  
             in different ways! That is, connect people in situations where they 
              are straunded with a problem and may not know if 
              a possible service provider is near them, and many more.For more information 
              about the Power of Konect, please read through the "For Better Expericence Section"..
              Enjoy.  </p>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Konect Form",
                    tabIcon: Dashboard,
                    tabContent: (
                      
      <GridContainer justify="center">

        <GridItem cs={12} sm={12} md={8}>
        <label >Your Current Location Details.</label> 
          <form onSubmit={this.handleSubmit}>
          <div className ="form-group">
           <label >Latitude</label>  
           <input onChange={this.handleLatitudeChange} type="text" class="form-control" id="latitude" value={this.state.input_request.lat} name="latitude" required />
         </div>
         <div class="form-group">
           <label >Longitude</label>
           <input onChange={this.handleLongitudeChange} type="text" value={this.state.input_request.lon} className="form-control" id="longitude" name="longitude"  required/>
         </div>
           <div class="form-group">
           <label >Number of Service Providers(3 to 6)</label>
           <input onChange={this.handleNeighboursChange}  type="text" value={this.state.input_request.neighbours}  className="form-control" id="neighbours" name="neighbours" required />
         </div>
         <div class="form-group">
           <label >Name</label>
           <input onChange={this.handleNameChange}  type="text" value={this.state.input_request.name}  className="form-control" id="name" name="name" required />
         </div>
         <div class="form-group">
           <label >Need</label>
           <textarea onChange={this.handleNeedChange}   type="text" value={this.state.input_request.need}  class="form-control" id="need" name="need" placeholder="Briefly explain the reason why you need a service provider" required/>
         </div>
          <MapsButton 
          Data = {this.state.input_request}

          />

            <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
             
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
   
                    )
                  },
                  {
                    tabButton: "Enable Location",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Enabling your Location enables Konect platform to get your location details automatically.
                          After this, go back to the konect form and fill in the other Information required.
                        </p>
                        <br />
                         <AutoGetLocation getLocationDetails={this.getAutofill} />
                      </span>
                    )
                  },  
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "For Better expericence",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          This section will contain instructions to clients for a better expericence with the platform
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "How to Images",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          This section will contain instructions in form of pictures to clients
                        </p>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>

      <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
        <br/><br/>
          <h3>Service Provider Details</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h5 style={{ 'fontSize': '15px'}}>
                Service providers in your vicinity.
                From the closest Service provider to the Farthest according to your 
                Current Location Details.
              </h5>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Service Providers",
                    tabContent: (

                      <div class="results">
                       {
                         this.state.results.length > 0 ? (
                          <div>
                            <div><h4 style={{ 'fontSize': '14px'}}>Note: The List is in the Order of who is most closest to your current Location</h4></div>
                            {neighbours.map(function(neighbour, index){
                            return(
                            <div key={index}>
                            <label >Bussiness/Personal Name  :    </label>  <br />
                            <span  >{neighbour.name}</span>
                            <br />
                            <label >Description of their services :   </label>  <br />
                            <span  >{neighbour.services}</span>
                            <br />
                            <label >Bussiness/Firm Contact  :  </label>  <br />
                            <span >{neighbour.contact}</span>
                            <br />
                            <label >Bussiness/Firm Email :  </label>  <br />
                            <span >{neighbour.email}</span>
                            <br />
                            <label >Other relevant Info about the service Provider :  </label>  <br />
                            <span >{neighbour.other}</span>
                             <br />
                             <br />

                            </div>
                            )
                             })}
                            </div>):
                               <div>
                                  <ResultsLayout />
                               </div>
                            //<span>None at the moment!</span>
                            
                        }
                      </div>


                    )
                  },
                
                ]}
              />
            </GridItem>
    
          </GridContainer>
        </div>
      </div>
    </div>
        <div class="results">
          {
            this.state.results.length > 0 ? (
            <MapTest  
            google={this.props.google}
            center={{lat: parseFloat(latit), lng: parseFloat(longit) }}
            height='700px'
            Cords = {neighbours}
            zoom={14}
            />
              ):
              <SectionCarousel />
            }
        </div>
        </div>
      </div>
    </div> 
   </div> 
  );
}
}
export default SectionPills;
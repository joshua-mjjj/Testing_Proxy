import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const classes = makeStyles(styles);

class MapsButton extends React.Component{  
    constructor(props){
         super(props);
         // bindings
         this.handleGoedata = this.handleGoedata.bind(this)

    }
    handleGoedata(e){
       console.log(this.props.Data)
    }
      

   render(){

     return (
      <div style={{ paddingLeft:'80px'}}>
        <CardFooter className={classes.cardFooter}>
          <Button type="submit" onClick={this.handleGoedata} simple color="primary" size="lg">
             Konect
          </Button>
        </CardFooter>
      </div>
 
        );
    }

}
export default MapsButton;
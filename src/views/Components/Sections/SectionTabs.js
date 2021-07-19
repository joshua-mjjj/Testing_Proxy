import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Service Provider Details</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h5>
               This section gives detailed Information about the service providers 
                in your vicinity.Note that the list gives providers in Order, that is
                 from the closest Service provider to the Farthest according to the 
                 Current Information Details you have provided.
              </h5>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Service Provider",
                    tabIcon: Face,
                    tabContent: (
                      <p className={classes.textCenter}>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    )
                  },
                
                ]}
              />
            </GridItem>
    
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

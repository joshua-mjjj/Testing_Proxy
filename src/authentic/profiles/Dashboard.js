import React, { Fragment} from 'react';
import Header from '../layouts/Header';
import Profiles from "./Profiles";
import Form from "./Form";

export default function Dashboard() {
	return(
	<Fragment>
		<Header />
        <div className="container">
        </div>
        <div className="container">
        	<Form />
        </div>
        <div className="container">
        	<Profiles />
        </div>
     </Fragment>
	);
}
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Member from '../containers/member';
import FrontPage from '../containers/front_page';

const Body = () => {
	return (
		<Switch>
			<Route path='/members/:crp_id' component={Member} />
			<Route path='/' component={FrontPage} />
		</Switch>
	);
};

export default Body;
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Member from './member';
import FrontPage from './front_page';

const Body = () => {
	return (
		<Switch>
			<Route path='/members/:crp_id' component={Member} />
			<Route path='/' component={FrontPage} />
		</Switch>
	);
};

export default Body;
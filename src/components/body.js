import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Member from '../containers/member';
import FrontPage from '../containers/front_page';

export default class Body extends Component {

	render(){
		return (
			<Switch>
				<Route path='/members/:crp_id' component={Member} />
				<Route path='/' component={FrontPage} />
			</Switch>
		);
	}
}
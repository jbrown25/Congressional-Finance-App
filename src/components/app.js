import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Body from './body';
import {getMembers} from '../actions';
import {connect} from 'react-redux';

class App extends Component {

	componentDidMount(){
		this.props.getMembers();
	}

	render(){
		return (
			<Router>
				<Body />
			</Router>
		);
	}
}

export default connect(null, {getMembers})(App);
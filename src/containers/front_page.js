import React, {Component} from 'react';
import SearchMembers from './search_members';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import FlagLoader from '../components/flag_loader';
import {withRouter} from 'react-router-dom';

class FrontPage extends Component {

	render(){
		const {members} = this.props;
		console.log(members);

		return (
			<section className='front_page'>
				<div className='text-center'>
					<h1>Congressional Finance App</h1>
				</div>
				<CSSTransition
					in={members.length < 1}
					classNames='loader'
					timeout={500}
					unmountOnExit >
					<FlagLoader />
				</CSSTransition>
				<SearchMembers />
			</section>
		);
	}
}

function mapStateToProps({members}){
	return {members};
}

export default withRouter(connect(mapStateToProps)(FrontPage));
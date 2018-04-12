import React, {Component} from 'react';
import SearchMembers from './search_members';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import FlagLoader from '../components/flag_loader';
import {withRouter} from 'react-router-dom';

class FrontPage extends Component {

	render(){
		const {members} = this.props;

		return (
			<section className='front_page'>
				<h1>Congressional Finance App</h1>
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
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
	constructor(props){
		super(props);

		this.state={
			isOpen: false
		};

		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.handleLinkClick = this.handleLinkClick.bind(this);
	}

	handleToggleClick(){
		const {isOpen} = this.state;
		this.setState({isOpen: !isOpen});
	}

	handleLinkClick(){
		this.setState({isOpen: false});
	}

	render(){
		const {crp_id} = this.props;
		return (
			<nav className={this.state.isOpen ? 'member_nav is_open' : 'member_nav'}>
				<div className='container'>
					<ul>
						<li><Link to={`/members/${crp_id}/top_contributors`} onClick={this.handleLinkClick}>Contributors</Link></li>
						<li><Link to={`/members/${crp_id}/top_industries`} onClick={this.handleLinkClick}>Industries</Link></li>
						<li><Link to={`/members/${crp_id}/top_sectors`} onClick={this.handleLinkClick}>Sectors</Link></li>
					</ul>
					<button 
						className='member_nav_toggle'
						onClick={this.handleToggleClick}>
						<span className='burger'>
							<span className='line'></span>
							<span className='line'></span>
							<span className='line'></span>
						</span>
					</button>
				</div>
			</nav>
		);
	}
}
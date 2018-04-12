import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SelectSearch from 'react-select-search';

class SearchMembers extends Component {

	constructor(props){
		super(props);

		this.state = {
			selectedMember: ''
		};
		
		//bind handlers
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	//format the array of members for the searchbar
	formatMembers(memb){
		//filter out entries without crp_ids or who aren't in office
		const filteredMembers = memb.filter((memb) => memb.crp_id != null && memb.in_office);
		
		//format for array:
		//name: first name + last name (party), state + district, value: crp_id
		return filteredMembers.map((member) => {
			return { name: `${member.first_name} ${member.last_name} (${member.party}), ${member.state} ${member.district}`, value: member.crp_id }
		});
	}

	handleChange(e){
		this.setState({
			selectedMember: e.value
		});
	}

	handleClick(){
		if(this.state.selectedMember){
			this.props.history.push(`/members/${this.state.selectedMember}/top_contributors`);
		}
	}

	render(){
		const {members} = this.props;

		if(!members.length){
			return (
				<div>Getting Members.</div>
			);
		}

		return (
			<div className='search-container'>
				<SelectSearch
					options={this.formatMembers(members)}
					value={this.state.selectedMember}
					onChange={this.handleChange}
					name='language'
					placeholder='Select member of congress' />
				<button
					type='button'
					onClick={this.handleClick}>
					Go
				</button>
			</div>
		);
	}
}

function mapStateToProps({members}){
	return {members};
}

export default withRouter(connect(mapStateToProps)(SearchMembers));
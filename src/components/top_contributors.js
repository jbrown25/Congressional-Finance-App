import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal} from '../utils/index';

export default class TopContributors extends Component {

	getOrgNames(contrib_data){
		return contrib_data.map((contrib) => {
			return contrib['@attributes'].org_name;
		});
	}

	getIndividualsData(contrib_data){
		return contrib_data.map((contrib) => {
			return parseInt(contrib['@attributes'].indivs);
		});
	}

	getPacsData(contrib_data){
		return contrib_data.map((contrib) => {
			return parseInt(contrib['@attributes'].pacs);
		});
	}

	render(){
		//contributors appear to be sorted by total, but maybe not always
		const contributors = sortByTotal(this.props.contributors);
		
		const org_names = this.getOrgNames(contributors);
		const individuals_data = this.getIndividualsData(contributors);
		const pacs_data = this.getPacsData(contributors);

		return (
			<div className='member_topic_container'>
				<div className='member_topic_content_column'>
					<div className='member_topic_content'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et augue lorem. Aenean sit amet tincidunt leo. Aenean magna est, pharetra eu blandit at, rhoncus a libero. Morbi luctus ante sed ultricies finibus. Nullam mattis est ac dolor viverra, vel bibendum urna eleifend. Aliquam faucibus rhoncus lorem egestas mattis. Mauris tristique scelerisque massa vitae aliquam. Pellentesque ullamcorper vitae est quis fermentum.</p>
					</div>
				</div>
				<div className='member_topic_chart_column'>
					<div className='member_topic_chart'>
						<StackedBarChart
							bar_labels={org_names}
							first_data_label='Individuals'
							first_data={individuals_data}
							second_data_label='PACs'
							second_data={pacs_data}
							chart_title='Top Contributors' />
					</div>
				</div>
			</div>
		);
	}
}
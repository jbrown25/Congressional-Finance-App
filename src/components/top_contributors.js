import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal, formatDollars} from '../utils/index';

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

		//get data of biggest contributor
		const top_contributor_name = org_names[org_names.length - 1];
		const top_contributor_individuals = individuals_data[individuals_data.length - 1];
		const top_contributor_pacs = pacs_data[pacs_data.length - 1];

		//content for section next tot the graph
		const contributor_content = `These are the top ten contributors to this campaign committee.  
		Contributions are not generally given by these organizations directly, but rather by individuals associated with them (employees for example) and PACs established to collect donations from individuals associated with them.  
		PACs, or political action committees, are organizations that collect and spend money in support of political candidates.  
		Individuals are generally limited to $2,700 per federal candidate per election, while PACs can contribute up to $5,000.  
		For example, the largest contributor to this campaign committee is ${top_contributor_name}.  They gave ${formatDollars(top_contributor_individuals)} from individuals and ${formatDollars(top_contributor_pacs)} from PACs, for a total of ${formatDollars(top_contributor_pacs + top_contributor_individuals)}`;

		return (
			<div className='member_topic_container'>
				<div className='member_topic_content_column'>
					<div className='member_topic_content'>
						<p>{contributor_content}</p>
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
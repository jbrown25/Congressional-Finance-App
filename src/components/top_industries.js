import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal, formatDollars} from '../utils/index';

export default class TopIndustries extends Component {

	getIndustryNames(industry_data){
		return industry_data.map((industry) => {
			return industry['@attributes'].industry_name;
		});
	}

	getIndividualsData(industry_data){
		return industry_data.map((industry) => {
			return parseInt(industry['@attributes'].indivs);
		});
	}

	getPacsData(industry_data){
		return industry_data.map((industry) => {
			return parseInt(industry['@attributes'].pacs);
		});
	}

	render(){
		//industries seem to be sorted by total, but might not always be
		const industries = sortByTotal(this.props.industries);

		const industry_names = this.getIndustryNames(industries);
		const individuals_data = this.getIndividualsData(industries);
		const pacs_data = this.getPacsData(industries);

		//get top industry
		const top_industry_name = industry_names[industry_names.length - 1];
		const top_industry_individuals = individuals_data[individuals_data.length - 1];
		const top_industry_pacs = pacs_data[pacs_data.length - 1];

		//content for section next to graph
		const industry_content = `These are the top ten industries from which this campaign committee receives contributions.  
		Contributions are given by individuals and PACs associated with these industries.
		PACs, or political action committees, are organizations that collect and spend money in support of political candidates.  
		Individuals are generally limited to $2,700 per federal candidate per election, while PACs can contribute up to $5,000.  
		For example, the industry from which this campaign committe receives the most contributions from is ${top_industry_name}.  
		They received ${formatDollars(top_industry_individuals)} from individuals and ${formatDollars(top_industry_pacs)} from PACs, for a total of ${formatDollars(top_industry_pacs + top_industry_individuals)}`;

		return (
			<div className='member_topic_container'>
				<div className='member_topic_content_column'>
					<div className='member_topic_content'>
						<p>{industry_content}</p>
					</div>
				</div>
				<div className='member_topic_chart_column'>
					<div className='member_topic_chart'>
						<StackedBarChart
							bar_labels={industry_names}
							first_data_label='Individuals'
							first_data={individuals_data}
							second_data_label='PACs'
							second_data={pacs_data}
							chart_title='Top Industries' />
					</div>
				</div>
			</div>
		);
	}
}
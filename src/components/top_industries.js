import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal} from '../utils/index';

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
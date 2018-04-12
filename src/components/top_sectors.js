import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal} from '../utils/index';

export default class TopSectors extends Component {

	getSectorNames(sector_data){
		return sector_data.map((sector) => {
			return sector['@attributes'].sector_name;
		});
	}

	getIndividualsData(sector_data){
		return sector_data.map((sector) => {
			return parseInt(sector['@attributes'].indivs);
		});
	}

	getPacsData(sector_data){
		return sector_data.map((sector) => {
			return parseInt(sector['@attributes'].pacs);
		});
	}	

	render(){
		//sectors seem to be random with respect to total, so I'm sorting them
		const sectors = sortByTotal(this.props.sectors);

		const sector_names = this.getSectorNames(sectors);
		const individuals_data = this.getIndividualsData(sectors);
		const pacs_data = this.getPacsData(sectors);

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
							bar_labels={sector_names}
							first_data_label='Individuals'
							first_data={individuals_data}
							second_data_label='PACs'
							second_data={pacs_data}
							chart_title='Top Sectors' />
					</div>
				</div>
			</div>
		);
	}
}
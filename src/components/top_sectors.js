import React, {Component} from 'react';
import StackedBarChart from './stacked_bar_chart';
import {sortByTotal, formatDollars} from '../utils/index';

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

		//get top sector
		const top_sector_name = sector_names[sector_names.length - 1];
		const top_sector_individuals = individuals_data[individuals_data.length - 1];
		const top_sector_pacs = pacs_data[pacs_data.length - 1];

		//content for section next to graph
		const sector_content = `These are the top ten sectors from which this campaign committee receives contributions.  
		Contributions are given by individuals and PACs associated with these sectors.
		PACs, or political action committees, are organizations that collect and spend money in support of political candidates.  
		Individuals are generally limited to $2,700 per federal candidate per election, while PACs can contribute up to $5,000.  
		For example, the sector from which this campaign committe receives the most contributions from is ${top_sector_name}.  
		They received ${formatDollars(top_sector_individuals)} from individuals and ${formatDollars(top_sector_pacs)} from PACs, for a total of ${formatDollars(top_sector_pacs + top_sector_individuals)}`;


		return (
			<div className='member_topic_container'>
				<div className='member_topic_content_column'>
					<div className='member_topic_content'>
						<p>{sector_content}</p>
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
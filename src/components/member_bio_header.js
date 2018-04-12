import React, {Component} from 'react';
import HorizontalBarChart from './horizontal_bar_chart';

export default class MemberHeader extends Component {

	render(){
		//need to check if these exist before rendering.

		const {memberBio} = this.props;
		const {memberFinances} = this.props;
		const {total} = memberFinances['@attributes'];
		const {spent} = memberFinances['@attributes'];
		const {cash_on_hand} = memberFinances['@attributes'];
		const {debt} = memberFinances['@attributes'];

		return (
			<div className='container'>
				<div className='member_bio_container'>
					<div className='member_bio_column'>
						<div className='member_bio_content'>
							<table>
								<tbody>
									<tr>
										<td>Name:</td>
										<td>{`${memberBio.first_name} ${memberBio.last_name}`}</td>
									</tr>
									<tr>
										<td>Party:</td>
										<td>{`${memberBio.party}`}</td>
									</tr>
									<tr>
										<td>District:</td>
										<td>{`${memberBio.state} ${memberBio.district}`}</td>
									</tr>
									<tr>
										<td>Votes with party:</td>
										<td>{`${memberBio.votes_with_party_pct}%`}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div className='member_finance_column'>
						<div className='member_finance_content'>
							<HorizontalBarChart
								bar_labels = {['Total receipts', 'Spent', 'Cash on hand', 'Debt']}
								data_label = 'USD'
								bar_data = {[total, spent, cash_on_hand, debt]}
								chart_title = {`Campaign fundraising for ${memberBio.first_name} ${memberBio.last_name} (${memberBio.party})`} />
						</div>
					</div>
				</div>		
			</div>
		);
	}
}
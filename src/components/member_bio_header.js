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

		const getSocialLinks = () => {
			const socialLinks = [];
			if(memberBio.twitter_account) socialLinks.push(<a href={`https://twitter.com/${memberBio.twitter_account}`}><i className='fa fa-twitter'></i></a>);
			if(memberBio.facebook_account) socialLinks.push(<a href={`https://facebook.com/${memberBio.facebook_account}`}><i className='fa fa-facebook'></i></a>);
			if(memberBio.youtube_account) socialLinks.push(<a href={`https://youtube.com/user/${memberBio.youtube_account}`}><i className='fa fa-youtube'></i></a>);
			return socialLinks;
		}

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
										<td>{memberBio.party}</td>
									</tr>
									<tr>
										<td>District:</td>
										<td>{`${memberBio.state} ${memberBio.district}`}</td>
									</tr>
									<tr>
										<td>Date of Birth:</td>
										<td>{memberBio.date_of_birth}</td>
									</tr>
									<tr>
										<td>Votes with party:</td>
										<td>{`${memberBio.votes_with_party_pct}%`}</td>
									</tr>
									<tr>
										<td>Office:</td>
										<td>{memberBio.office}</td>
									</tr>
									<tr>
										<td>Phone:</td>
										<td>{memberBio.phone}</td>
									</tr>
								</tbody>
							</table>
							<ul className='social_links'>
								{getSocialLinks()}
							</ul>
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
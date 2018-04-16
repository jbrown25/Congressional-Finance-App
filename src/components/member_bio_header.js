import React, {Component} from 'react';
import HorizontalBarChart from './horizontal_bar_chart';

export default class MemberHeader extends Component {

	render(){

		const {memberBio, memberFinances} = this.props;
		const {total, spent, cash_on_hand, debt} = memberFinances['@attributes'];

		const getSocialLinks = () => {
			const socialLinks = [];
			if(memberBio.twitter_account) socialLinks.push(<li><a href={`https://twitter.com/${memberBio.twitter_account}`}><i className='fa fa-twitter'></i></a></li>);
			if(memberBio.facebook_account) socialLinks.push(<li><a href={`https://facebook.com/${memberBio.facebook_account}`}><i className='fa fa-facebook'></i></a></li>);
			if(memberBio.youtube_account) socialLinks.push(<li><a href={`https://youtube.com/user/${memberBio.youtube_account}`}><i className='fa fa-youtube'></i></a></li>);
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
									<tr>
										<td>Social Media:</td>
										<td>
											<ul className='social_links'>
												{getSocialLinks()}
											</ul>
										</td>
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
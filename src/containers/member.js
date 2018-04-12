import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Switch, Route} from 'react-router-dom';
import {getMemberData} from '../actions/index';
import TopBar from '../components/top_bar';
import MemberBioHeader from '../components/member_bio_header';
import TopContributors from '../components/top_contributors';
import TopIndustries from '../components/top_industries';
import TopSectors from '../components/top_sectors';
import Navigation from '../components/navigation';
import Footer from '../components/footer.js';

class Member extends Component {

	componentDidMount(){
		//eventually, gonna have to map the names so url doesn't use crp_id
		const {crp_id} = this.props.match.params;
		this.props.getMemberData(crp_id);
	}

	componentDidUpdate(prevProps){
		if(this.props.match.params.crp_id != prevProps.match.params.crp_id){
			this.props.getMemberData(this.props.match.params.crp_id);
		}
	}

	render(){
		const {member} = this.props;
		const {members} = this.props;
		
		//checks if member exists and if ajax response matches the current url.  Way too long obv
		if(member.length && member[3].data.response.summary['@attributes'].cid === this.props.match.params.crp_id){
			//member found
			const {contributor} = member[0].data.response.contributors;
			const {industry} = member[1].data.response.industries;
			const {sector} = member[2].data.response.sectors;
			const {summary} = member[3].data.response;

			//get info from list of members
			const member_bio = members.find((this_member) => {
				return this_member.crp_id === this.props.match.params.crp_id;
			});

			return (
				<div>
					<TopBar />
					<MemberBioHeader memberBio={member_bio} memberFinances={summary} />
					<Navigation crp_id={this.props.match.params.crp_id} />
					<section className='member_content'>
						<div className='container'>
							<Switch>
								<Route path='/members/:crp_id/top_contributors' render={() => <TopContributors contributors={contributor} />} />
								<Route path='/members/:crp_id/top_industries' render={() => <TopIndustries industries={industry} />} />
								<Route path='/members/:crp_id/top_sectors' render={() => <TopSectors sectors={sector} />} />
							</Switch>
						</div>
					</section>
					<Footer />
				</div>
			);
		}
		//put loading animation here
		return (
			<div>loading...</div>
		);
	}
}

function mapStateToProps(state){
	return {
		member: state.member,
		members: state.members
	};
}

export default withRouter(connect(mapStateToProps, {getMemberData})(Member));
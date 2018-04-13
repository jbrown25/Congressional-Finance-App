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
import FlagLoader from '../components/flag_loader';
import {CSSTransition} from 'react-transition-group';


class Member extends Component {

	componentDidMount(){
		//request member data
		const {crp_id} = this.props.match.params;
		this.props.getMemberData(crp_id);
	}

	componentDidUpdate(prevProps){
		//if path doesn't match current member, request member data with crp_id in path
		//prevents rendering previous member
		if(this.props.match.params.crp_id != prevProps.match.params.crp_id){
			this.props.getMemberData(this.props.match.params.crp_id);
		}
	}

	render(){
		const {member} = this.props;
		const {members} = this.props;

		const shouldRenderPage = member.length && member[3].data.response.summary['@attributes'].cid === this.props.match.params.crp_id;
		
		const renderPage = () => {
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

		return (
			<div>
				<CSSTransition
					in={!shouldRenderPage}
					classNames='loader'
					timeout={500}
					unmountOnExit >
					<FlagLoader />
				</CSSTransition>
				{ shouldRenderPage ? renderPage() : <div>Loading... </div> }
			</div>
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
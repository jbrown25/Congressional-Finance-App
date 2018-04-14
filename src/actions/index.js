import axios from 'axios';

const ROOT_URL = 'https://9t8ly6d6b9.execute-api.us-west-2.amazonaws.com/dev';

export const GET_MEMBERS = 'get_members';
export const GET_MEMBER_DATA = 'get_member';

//action creator
export function getMembers(){
	const members_url = `${ROOT_URL}/members`;
	const members_request = axios.get(members_url);

	return {
		type: GET_MEMBERS,
		payload: members_request
	};
}

export function getMemberData(crp_id){
	function getContributions(){
		return axios.get(`${ROOT_URL}/${crp_id}/candContrib`);
	}

	function getIndustry(){
		return axios.get(`${ROOT_URL}/${crp_id}/candIndustry`);
	}

	function getSector(){
		return axios.get(`${ROOT_URL}/${crp_id}/candSector`);
	}

	function getSummary(){
		return axios.get(`${ROOT_URL}/${crp_id}/candSummary`);
	}

	const member_request = axios.all([getContributions(), getIndustry(), getSector(), getSummary()]);

	return {
		type: GET_MEMBER_DATA,
		payload: member_request
	};
}
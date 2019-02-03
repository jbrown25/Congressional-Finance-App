import React from 'react';
import SearchMembers from './search_members';
import {Link} from 'react-router-dom';

const TopBar = () => {
	return (
		<header className='top_bar'>
			<div className='container'>
				<Link to='/' className='back_link'>Back</Link>
				<SearchMembers />
			</div>
		</header>
	);
};

export default TopBar;
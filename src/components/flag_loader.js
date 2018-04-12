import React from 'react';

const FlagLoader = () => {

	return (
		<div className='flag_container'>
			<div className='flag'>
				{buildFlag()}
			</div>
		</div>
	);
};

const buildFlag = () => {
	const flagArray = [];

	for(let i = 0; i < 19; i++){
		i < 7 ? flagArray.push(<BlueColumn key={i} />) : flagArray.push(<RedColumn key={i} />);
	}

	return flagArray;	
};

const BlueColumn = () => {
	return (
		<div className='flag_column'>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='blue'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
		</div>
	);
};

const RedColumn = () => {
	return (
		<div className='flag_column'>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
			<div className='white'></div>
			<div className='red'></div>
		</div>
	);
};

export default FlagLoader;
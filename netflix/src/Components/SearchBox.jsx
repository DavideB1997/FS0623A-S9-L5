import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			onSearch(searchTerm);
		}
	};

	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<div>
			<input
				type='text'
				placeholder='Cerca...'
				value={searchTerm}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
		</div>
	);
};

export default SearchBox;

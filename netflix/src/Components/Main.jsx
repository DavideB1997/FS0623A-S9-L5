import React from 'react';
import SearchLine from './MovieLine';
import Search from './Search';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container-fluid px-4'>
				<Search />
				<SearchLine searchTerm='Terminator' />
				<SearchLine searchTerm='Harry Potter' />
				<SearchLine searchTerm='Star Wars' />
			</div>
		);
	}
}

export default Main;

import React from 'react';
import MovieLine from './MovieLine';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container-fluid px-4'>
				<MovieLine />
			</div>
		);
	}
}

export default Main;

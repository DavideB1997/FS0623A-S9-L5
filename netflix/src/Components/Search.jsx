import React from 'react';
import { Form, Row } from 'react-bootstrap';
import SearchLine from './MovieLine';

class Search extends React.Component {
	state = {
		searchQuery: '',
		buttonPressed: false,
	};

	handleInputChange = (e) => {
		this.setState({
			searchQuery: e.target.value.toLowerCase(),
		});
	};

	handleKeyDown = (e) => {
		this.setState({
			buttonPressed: e.key === 'Enter' ? true : false,
		});
	};

	render() {
		return (
			<div>
				<Form.Group>
					<Form.Label>Cerca un libro</Form.Label>
					<Form.Control
						type='text'
						placeholder='Scrivi un titolo o parte di esso'
						value={this.state.searchQuery}
						onChange={this.handleInputChange}
						onKeyDown={this.handleKeyDown}
					/>
				</Form.Group>

				<Row>
					{this.state.buttonPressed && this.state.searchQuery !== '' && (
						<SearchLine searchTerm={this.state.searchQuery} />
					)}
				</Row>
			</div>
		);
	}
}

export default Search;

import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import MovieModal from './Modal';
// import CommentArea from './CommentArea';

class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
		};
	}

	handleToggleSelected = () => {
		this.setState((prevState) => ({
			selected: !prevState.selected,
		}));
	};

	handleCloseModal = () => {
		this.setState({ selected: null });
	};

	render() {
		const { Title, Poster, Metascore, imdbRating } = this.props.movie;
		const { selected } = this.state;

		const cardStyle = {
			width: '18rem',
			border: selected ? '2px solid blue' : 'none',
		};

		return (
			<>
				{console.log(Title)}
				<Card style={cardStyle} onClick={this.handleToggleSelected}>
					<Card.Img variant='top' src={Poster} />
					<Card.Body>
						<Card.Title>{Title}</Card.Title>
					</Card.Body>
				</Card>
				{/* {this.state.selected && <CommentArea asin={asin} />} */}
				{this.state.selected && (
					<MovieModal movie={this.props.movie} onClose={this.handleCloseModal} />
				)}
			</>
		);
	}
}

export default Movie;

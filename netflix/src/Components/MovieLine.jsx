import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Movie from './Movie';

class MovieLine extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			isLoading: true,
			isError: false,
		};
	}

	getMovies = () => {
		fetch('http://www.omdbapi.com/?apikey=87450841&s=' + this.props.searchTerm)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					throw new Error('Errore caricamento film');
				}
			})
			.then((data) => {
				console.log(data);
				this.setState({
					movies: data.Search,
					isLoading: false,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					isLoading: false,
					isError: true,
				});
			});
	};

	componentDidMount() {
		this.getMovies();
	}

	render() {
		const movieCap = 6;
		console.log(this.state.movies);

		return (
			<>
				<h1 className='text-white'>{this.props.searchTerm}</h1>
				<div className='row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center'>
					{this.state.movies.slice(0, movieCap).map((movie, index) => (
						<div
							key={index}
							className='col-md-4 col-sm-6 col-lg-3 p-0 mb-4 d-flex justify-content-center'
						>
							<Movie movie={movie} />
						</div>
					))}
				</div>
			</>
		);
	}
}

export default MovieLine;

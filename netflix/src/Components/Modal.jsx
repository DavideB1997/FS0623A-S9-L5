import React from 'react';
import { Modal } from 'react-bootstrap';
import CommentArea from './CommentArea';

const MovieModal = ({ movie, onClose }) => {
	return (
		<Modal show={true} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>{movie.Title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h1>Commenti!</h1>
				<CommentArea movie={movie} imdbID={movie.imdbID} />
			</Modal.Body>
		</Modal>
	);
};

export default MovieModal;

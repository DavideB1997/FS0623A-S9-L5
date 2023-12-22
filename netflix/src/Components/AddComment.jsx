import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import CommentArea from './CommentArea';

class AddComment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			commento: {
				author: '',
				comment: '',
				rate: '',
				elementId: this.props.asin,
			},
			nuovo: false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		fetch('https://striveschool-api.herokuapp.com/api/comments', {
			method: 'POST',
			body: JSON.stringify(this.state.commento),
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDMxNjM4NTAsImV4cCI6MTcwNDM3MzQ1MH0._pFUAQbhcO0kd-lSrNbAa-TH4PqMkUEmFCFl0CllR_s',
			},
		})
			.then((res) => {
				console.log(res);
				if (res.ok) {
					this.state = {
						commento: {
							author: '',
							comment: '',
							rate: '',
							elementId: this.props.asin,
						},
						nuovo: false,
					};
				} else {
					throw new Error("Errore nell'invio del commento");
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		return (
			<>
				<Container>
					{this.state.nuova === true && <CommentArea />}
					<Row className='justify-content-center mt-3'>
						<form onSubmit={this.handleSubmit}>
							<Form.Group className='mb-3'>
								<Form.Label>Il tuo nome</Form.Label>
								<Form.Control
									type='text'
									placeholder='Nome'
									required
									value={this.state.commento.author}
									onChange={(e) => {
										this.setState({
											commento: { ...this.state.commento, author: e.target.value },
										});
									}}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>Il tuo Commento</Form.Label>
								<Form.Control
									type='text'
									placeholder='commento'
									required
									value={this.state.commento.comment}
									onChange={(e) => {
										this.setState({
											commento: { ...this.state.commento, comment: e.target.value },
										});
									}}
								/>
							</Form.Group>
							<Form.Group className='mb-3'>
								<Form.Label>rate</Form.Label>
								<Form.Select
									aria-label='Quantità'
									required
									value={this.state.commento.rate}
									onChange={(e) => {
										this.setState({
											commento: { ...this.state.commento, rate: e.target.value },
										});
									}}
								>
									<option defaultValue={1}>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Form.Select>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Invia!
							</Button>
						</form>
					</Row>
				</Container>
			</>
		);
	}
}

export default AddComment;

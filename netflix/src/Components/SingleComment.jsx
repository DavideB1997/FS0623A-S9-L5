import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

class SingleComment extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<ListGroup.Item key={this.props._id}>
					<div>{this.props.comment}</div>
				</ListGroup.Item>
			</>
		);
	}
}

export default SingleComment;

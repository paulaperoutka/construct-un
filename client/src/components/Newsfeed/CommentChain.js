import React, { Component } from "react";
import {
	ListGroup, 
	ListGroupItem, 
	ListGroupItemHeading, 
	ListGroupItemText
} from "reactstrap";

class CommentChain extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		const commentList = this.props.comments.map(comment => {
			return (
				<ListGroupItem>
          <ListGroupItemHeading>{comment.body}</ListGroupItemHeading>
          <ListGroupItemText className="pull-right">
          	{comment.user}
          </ListGroupItemText>
        </ListGroupItem>
			);
		});

    return (
      <ListGroup>
        {commentList}
      </ListGroup>
    );
  }

}

export default CommentChain;
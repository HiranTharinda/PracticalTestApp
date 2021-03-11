
import React, {Component} from 'react';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

class Comment extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const {comment} = this.props;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardText className ={"ml-4"}>{comment.text}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default Comment;

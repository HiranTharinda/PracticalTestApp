
import React, {Component} from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import OpenPost from '../organisms/viewPostModal';
import {Col} from 'reactstrap'

class PostCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {post, single}= this.props
        return (
            <div>
                <Card>
                    <Col sm="12" md={{ size: 9, offset: 1 }}>
                        <CardBody className ={"ml-4"}>
                            <CardTitle color={post.color} tag="h5"><p style={{color:post.color}}>{post.title}</p></CardTitle>
                                <CardText >{post.description}</CardText>
                                {post.comments && post.comments.length > 0 ? (
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> {post.comments.length == 1 ? ('1 comment') : (post.comments.length+ ' comments')}</CardSubtitle>
                                ):(
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> 0 comments</CardSubtitle>
                                    )}
                            {single ? (null) : (
                                <OpenPost className ={'mb-2'} post={post} />
                            )}
                        </CardBody>
                    </Col>
                </Card>
            </div>
        );
    }
};

export default PostCard;

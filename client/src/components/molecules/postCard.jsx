
import React, {Component} from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import OpenPost from '../organisms/viewPostModal';

class PostCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {post, single}= this.props
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">{post.title}</CardTitle>
                            <CardText>{post.description}</CardText>
                            {post.comments && post.comments.length > 0 ? (
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> {post.comments.length == 1 ? ('1 comment') : (post.comments.length+ ' comments')}</CardSubtitle>
                             ):(
                                <CardSubtitle tag="h6" className="mb-2 text-muted"> 0 comments</CardSubtitle>
                                )}
                        {single ? (null) : (
                            <OpenPost className ={'mb-2'} post={post} />
                        )}
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default PostCard;

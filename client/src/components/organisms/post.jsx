import React, { Component } from 'react';
import PostCard from '../molecules/postCard'

class Post extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {post, single} = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid d-flex">
                        <div className="col-md-4 mb-4" >
                            <PostCard post={post} single = {single} />
                        </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Post;
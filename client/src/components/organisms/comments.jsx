import React, { Component } from 'react';
import Comment from '../molecules/comment'

class Comments extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {comments} = this.props
        return (
            <React.Fragment>
                <div className="container-fluid d-flex">
                    <div> 
                    {comments.map(comment => (
                        <div className="col-md-4 mb-4" >
                            <Comment key={comment.id} comment= {comment} />
                        </div>
                    ))}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Comments;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions'
import PostCard from '../molecules/postCard'
import CreatePost from '../organisms/createPostModal';
import {Col} from 'reactstrap'
class Posts extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        const { getPosts} = this.props;
        getPosts()
    }

    componentDidUpdate(prevProps){
        const {posts, updated, getPosts} = this.props
        if(updated !== prevProps.updated){
                getPosts()
        }
        if(posts !== prevProps.posts){
            if(posts){
                this.setState({posts:posts})
            }   
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                <CreatePost/>
                <div className="container-fluid d-flex">
                    <div > 
                    { posts && posts.length > 0 ? (
                        posts.map(post => (
                            <div className="col-md-4 mb-4" >
                                <PostCard key={post.id} post={post} />
                            </div>
                        ))
                    ): null}
                    </div>
                </div>
                </Col>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    updated: state.posts.updated
});

export default connect(mapStateToProps, {getPosts})(Posts);
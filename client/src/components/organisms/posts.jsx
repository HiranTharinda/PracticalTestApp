import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions'
import PostCard from '../molecules/postCard'
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
        const {posts} = this.props
        if(posts !== prevProps.posts){
            this.setState({posts:posts})
        }
    }

    render() {
        const { posts } = this.state;
        return (
            <React.Fragment>
                <div className="container-fluid d-flex">
                    <div > 
                    
                    {posts.length > 0 ? (
                        posts.map(post => (
                            <div className="col-md-4 mb-4" >
                                <PostCard key={post.id} post={post} />
                            </div>
                        ))
                    ): null}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

export default connect(mapStateToProps, {getPosts})(Posts);
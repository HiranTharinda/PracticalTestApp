import React, { Component } from 'react';
import NavigationBar from '../organisms/navBar';
import Posts from '../organisms/posts';
import CreatePost from '../organisms/createPostModal';

class HomePage extends Component {
    render() {
        return (
            <div className={'mainDiv'}>
                <NavigationBar />
                <CreatePost/>
                <Posts />
            </div>
        )
    }
}
export default HomePage;
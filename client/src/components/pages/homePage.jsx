import React, { Component } from 'react';
import NavigationBar from '../organisms/navBar';
import Posts from '../organisms/posts';
import {Col} from 'reactstrap'

class HomePage extends Component {
    render() {
        return (
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <NavigationBar />
                <Posts />
            </Col>
        )
    }
}
export default HomePage;
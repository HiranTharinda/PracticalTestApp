import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { GithubPicker } from 'react-color'

import {createPost} from '../../actions/postActions';


class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
    const {createPost}=this.props;
    const formValues = {
        title:this.title.value,
        description:this.description.value,
        }
    createPost(formValues)
    e.preventDefault();
    }

    toggle = () => {
        const { isOpen } = this.state;
        this.setState({
            isOpen:!isOpen
        })
    }

    render() {
        const { isOpen } = this.state;
        return (
            <div>
                <Form inline onSubmit={(e) =>  e.preventDefault()}>
                <div className="container-fluid d-flex">
                    <Button outline className="col-md-4 mb-4 ml-4"color="primary" onClick={()=>this.toggle()}>Create New Post</Button>{' '}
                    </div>
                <Modal isOpen={isOpen} toggle={()=>this.toggle()} >
                    <ModalHeader toggle={()=>this.toggle()}>Create Post</ModalHeader>
                    <ModalBody>
                            <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text" placeholder={'Title...'} ref={(input) => this.title = input} />
                            </label>
                            <label>
                                <input type="text" placeholder={'Description...'} ref={(input) => this.description = input} />
                            </label>
                            <input type="submit" value="Publish" />
                            </form>
                        <GithubPicker />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
                </Form>
            </div>
        );
    }
}
export default connect(null, {
    createPost
})(CreatePost);

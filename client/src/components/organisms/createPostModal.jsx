import React, {Component} from 'react';
import { Form, Button, Modal, ModalHeader, ModalBody, ModalFooter,  FormGroup, Label, Input, } from 'reactstrap';
import { connect } from 'react-redux';
import { GithubPicker } from 'react-color'
import {Col} from 'reactstrap'
import {createPost} from '../../actions/postActions';


class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            title:null,
            description:null,
            color:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

 
    
    handleChangeComplete = (color) => {
        this.setState({ color: color.hex });
    };
    
    handleDesChange(e){
        this.setState({
            description:e
        })
    }

    handleTitleChange(e){
        this.setState({
            title:e
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {createPost}=this.props;
        const {title, description, color} = this.state;
        if(!title){
            alert('Please enter a Title')
            
        } else {
            const formValues = {
                title,
                description,
                color
                }
            createPost(formValues)
            this.setState({
                title:null,
                description:null,
                color:null
            })
            this.toggle()  
            }
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
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button outline className="mb-4 mt-4" color="primary" onClick={()=>this.toggle()}>Create New Post</Button>{' '}
                   </Col> </div>
                <Modal isOpen={isOpen} toggle={()=>this.toggle()} >
                    <ModalHeader toggle={()=>this.toggle()}>Create Post</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup >
                            <Label for="title">Title</Label>
                            <Input type="text" onChange={(e) => this.handleTitleChange(`${e.target.value}`)} name="title" id="title" placeholder="Title.." />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" onChange={(e) => this.handleDesChange(`${e.target.value}`)} name="description" id="description" placeholder="Description here.." />
                            </FormGroup>
                            <FormGroup>
                                <GithubPicker 
                                    color={ this.state.background }
                                    onChangeComplete={ this.handleChangeComplete }>    
                                </GithubPicker>
                            </FormGroup>
                        <Button onClick ={(e) => this.handleSubmit(e)}>Publish</Button>
                        </Form>
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

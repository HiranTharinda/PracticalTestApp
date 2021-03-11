
import React, { Component } from 'react'
import { Form, Button, Modal, ModalHeader, ModalBody,  FormGroup, Input, } from 'reactstrap';
import { connect } from 'react-redux';
import Comments from '../organisms/comments';
import Post from '../organisms/post'
import {createComment} from '../../actions/commentActions'

class OpenPost extends Component {
    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
            comment:null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleComChange(e){
        this.setState({
            comment:e
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const {createComment, post}=this.props;
        const {comment} = this.state;
        if(!comment){
            alert('Please enter a comment')
            
        } else {
            const formValues = {
                postId:post.id,
                text:comment
             }
            createComment(formValues)
            this.setState({
                postId:null,
                comment:null,
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
        const {post} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <Form inline onSubmit={(e) => e.preventDefault()}>
                    <Button outline className="class-col" color="primary" onClick={()=>this.toggle()}>View</Button>{' '}
                </Form>
                <Modal isOpen={isOpen} toggle={()=>this.toggle()} >
                    <ModalHeader toggle={()=>this.toggle()}><p style={{color:post.color}}>{post.title}</p></ModalHeader>
                    <ModalBody >
                    <div className="col-md-4 mb-4" >
                        <Post post={post} single ={true}/>
                        </div>
                        {post.comments  ? (
                              <div className="col-md-4 mb-4" >
                            <Comments comments={post.comments}/>
                            </div>
                        ):null}

                        <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type="text" onChange={(e) => this.handleComChange(`${e.target.value}`)} name="comment" id="comment" placeholder="Comment here.." />
                            </FormGroup>
                        <Button onClick ={(e) => this.handleSubmit(e)}>Comment</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default connect(null, {createComment})(OpenPost);


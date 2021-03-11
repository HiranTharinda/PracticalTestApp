
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';
import { connect } from 'react-redux';
import Comments from '../organisms/comments';
import Post from '../organisms/post'
import {createComment} from '../../actions/commentActions'

import React, { Component } from 'react'

class OpenPost extends Component {

    constructor(props){
        super(props);
        this.state ={
            isOpen: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      handleSubmit(e) {
        const {createComment, post}=this.props;
        const formValues = {
            postId:post.id,
            text:this.text.value
         }
         createComment(formValues)
        e.preventDefault();
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
                    <ModalHeader onClick={()=>this.toggle()}>{post.title}</ModalHeader>
                    <ModalBody>
                    <div className="col-md-4 mb-4" >
                        <Post post={post} single ={true}/>
                        </div>
                        {post.comments  ? (
                              <div className="col-md-4 mb-4" >
                            <Comments comments={post.comments}/>
                            </div>
                        ):null}
                             <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text"  placeholder={'Comment here...'}  ref={(input)=> this.text= input} />
                            </label>
                            <input type="submit" value="Comment" />
                            </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default connect(null, {createComment})(OpenPost);


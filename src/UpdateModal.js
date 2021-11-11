import { Component } from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UpdateModal extends Component {

    handleClose = () => {
        this.props.closeModal();
    }

    hasContent = (value) => {
        if (value) {
            return value;
        } else {
            return null;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        let title = this.hasContent(e.target.updateBook[0].value);
        let description = this.hasContent(e.target.updateBook[1].value);
        let status = this.hasContent(e.target.updateBook[2].value);
        let email = this.props.user.email;
        let book = { title, description, status, email };
        console.log(book);
        let id = this.props.modalId._id;
        this.updateBook(id, book, email);
        this.props.closeModal();
    }
    
    updateBook = async (id, book, email) => {
        let url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${email}`
        console.log(url);
        try {
            let updatedBook = await axios.put(url, book)
            this.props.getBooks();
                console.log(updatedBook);
        }
         catch (e) {
            console.log(e); 
        } 
    }

    render() {
        return (
            <>
                <Modal
                    show={this.props.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit {this.props.modalId.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="updateBook">
                                <Form.Label>title</Form.Label>
                                <Form.Control type="text" placeholder="update title" />
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text" placeholder="update description" />
                                <Form.Label>status</Form.Label>
                                <Form.Control type="text" placeholder="update status" />
                                <Button type = 'submit' variant="primary">Update</Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }

}
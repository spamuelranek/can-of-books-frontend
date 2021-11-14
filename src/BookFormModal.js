import { withAuth0 } from '@auth0/auth0-react';
import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFormModal extends Component {

constructor(props) {
    super(props)
    this.state = {button: true};
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let title = e.target.addBook[0].value;
        let description = e.target.addBook[1].value;
        let status = e.target.addBook[2].value;
        let email = this.props.auth0.user.email;
        let book = {title,description,status,email};
        this.props.postBook(book);
        this.closeModal();
    }
    
    addBookButton = () => {
        this.setState({button: false});
        console.log(this.state.button);
    }

    closeModal = () => {
        this.setState({button: true});
        console.log(this.state.button);
    }

    render() {
        return (
            <>
            {this.state.button ? <Button onClick = {this.addBookButton}>Add Book</Button> : 
            <Form onSubmit = {this.handleSubmit}>
            <Form.Group className="mb-3" controlId="addBook">
              <Form.Label>title</Form.Label>
              <Form.Control type="text" placeholder="title" />
              <Form.Label>description</Form.Label>
              <Form.Control type="text" placeholder="description" />
              <Form.Label>status</Form.Label>
              <Form.Control type="text" placeholder="status" />
              <Button type = 'submit'>Enter</Button>
            </Form.Group>
          </Form>
            }
          </>
        )
    }
}

export default withAuth0(BookFormModal);

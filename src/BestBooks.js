import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards.js';
import UpdateModal from './UpdateModal.js';
import {withAuth0} from '@auth0/auth0-react';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {modalId: {},  show: false };
  }

  componentDidMount() {
    this.props.getBooks();
  }

  openModal = (modalCard) => {
    console.log(this.state);
    this.setState({modalId: modalCard});
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }


  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.props.books.filter(book => book.email === this.props.auth0.user.email).length > 0  ? (
          <Carousel variant='dark'>
            {
              this.props.books.filter(book => book.email === this.props.auth0.user.email).map(book => {
                return (
                  <Carousel.Item key={book._id}>
                    <Cards openModal = {this.openModal} book={book} deleteBook={this.props.deleteBook} />
                  </Carousel.Item>  
                )
              })
            }
          </Carousel>
        ) : (
          <h3>Book collection is empty(</h3>
        )}
        <UpdateModal updateBook = {this.props.updateBook} getBooks = {this.props.getBooks} userName = {this.props.auth0.user.name} userEmail = {this.props.auth0.user.email} modalId = {this.state.modalId} closeModal = {this.closeModal} show = {this.state.show}/> 
      </>
    )
  }
}

export default withAuth0(BestBooks);

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Cards from './Cards.js';
import UpdateModal from './UpdateModal.js';
import axios from 'axios';

class BestBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {books: [], modalId: {},  show: false };
  }

  componentDidMount() {
    this.getBooks();
  }

  openModal = (modalCard) => {
    console.log(this.state);
    this.setState({modalId: modalCard});
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  
  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER_URL}/books`;
    try {
      const response = await axios.get(url);
      console.log('inside try of getBooks');
      this.setState({books: response.data});
    } catch (e) {
      console.error(e.response);
      }
  }


  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 ? (
          <Carousel variant='dark'>
            {
              this.state.books.filter(book => book.email === this.props.user.email).map(book => {
                return (
                  <Carousel.Item key={book._id}>
                    <Cards openModal = {this.openModal} user={this.props.user} book={book} deleteBook={this.props.deleteBook} />
                  </Carousel.Item>  
                )
              })
            }
          </Carousel>
        ) : (
          <h3>Book collection is empty(</h3>
        )}
        <UpdateModal updateBook = {this.props.updateBook} getBooks = {this.getBooks} user = {this.props.user} modalId = {this.state.modalId} closeModal = {this.closeModal} show = {this.state.show}/> 
      </>
    )
  }
}

export default BestBooks;

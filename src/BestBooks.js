import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';


class BestBooks extends React.Component {
 
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length > 0 ? (
          <Carousel>
            {
              this.props.books.map(book => {
                return (
          <Carousel.Item key= {book._id}>
            <img
            className = 'd-block w-75'
            src = "http://via.placeholder.com/150"
            alt = {book.title}/>
          <Carousel.Caption>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
             )
           })
          }
        </Carousel>
        ) : (
          <h3>Book collection is empty(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

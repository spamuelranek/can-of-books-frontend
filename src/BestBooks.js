import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './CarouselCard';

class BestBooks extends React.Component {
 
  componentDidMount() {
    this.props.getBooks();
  } 
  

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.props.books.length > 0 ? (
          <Carousel variant = 'dark'>
            {
              this.props.books.filter(book => book.email === this.props.user.email).map(book => {
                return (
                  <Carousel.Item key = {book._id}>
                  <CarouselCard book = {book} deleteBook = {this.props.deleteBook}/>
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

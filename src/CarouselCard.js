import {Component} from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';

export default class CarouselCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.book._id
        };
    }

    handleClick() {
        console.log(this.props);
    }

    Book() {
        console.log('delete book');
    }

    render() {
        return (
            <>
            <img
            className = 'd-block w-75'
            src = "http://via.placeholder.com/150"
            alt = {this.props.book.title}/>
          <Carousel.Caption>
              <h3>{this.props.book.title}</h3>
              <p>{this.props.book.description}</p>
            </Carousel.Caption>
            <>
            <button className = 'carousel-button' onClick = {() => this.props.deleteBook(this.props.book._id)}>Remove Book</button>
            </>
          </>
        )
    }

}
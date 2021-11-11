import {Component} from 'react';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default class Cards extends Component {

    clickUpdate = () => {
        this.props.openModal(this.props.book);
    }

    clickDelete = () => {
        console.log('hi from delete');
        this.props.deleteBook(this.props.book._id);
    }


    render() {
        return (
           <>
                <img className = 'd-block w-75'
                src = "http://via.placeholder.com/150"
                alt = {this.props.book.title}/>
                <Carousel.Caption>
                    <h3>{this.props.book.title}</h3>
                    <p>{this.props.book.description}</p>
                <div className = 'buttonDiv'>
                <button className = 'carousel-button' onClick = {this.clickDelete}>Remove Book</button>
                <button className = 'carousel-button' onClick = {this.clickUpdate}>Update Book</button>
                </div>
                </Carousel.Caption>
                
           </>

        )
    }
}
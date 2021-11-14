import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Profile from './Profile';
import BookFormModal from './BookFormModal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks.js';
import axios from 'axios';
import './app.css';
import {withAuth0} from '@auth0/auth0-react';
import LoginButton0 from './loginButton0.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: true,
      user: null,
      books: []
    }
  }

  loginHandler = (user) => {
    this.setState({
      user
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null
    })
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

  postBook = async (bookObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    console.log(url);
    console.log(bookObj);
    try {
      let response = await axios.post(url, bookObj);
      console.log(this.state.books);
      this.setState({ books: [...this.state.books, response.data] });
      
    } catch (e) {
      console.log(e);
    }
  }

  deleteBook = async (id) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books/${id}?email=${this.props.auth0.user.email}`;
    console.log(url);
    try {
      await axios.delete(url);
      let modifiedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: modifiedBooks });
      this.getBooks();
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks user={this.state.user} getBooks ={this.getBooks} deleteBook={this.deleteBook} books={this.state.books} /> : <LoginButton0/>}
            </Route>
            <Route exact path='/profile'>
              <Profile user={this.state.user} />
            </Route>
          </Switch>
          {this.props.auth0.isAuthenticated ? <BookFormModal postBook={this.postBook} user={this.state.user} closeModal={this.closeModal} /> : false}
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);

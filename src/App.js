import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Profile from './Profile';
import BookFormModal from './BookFormModal.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBooks from './BestBooks';
import { Button } from 'react-bootstrap';
import axios from 'axios';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      books: [],
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null
    })
  }

  postBook = async (bookObj) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/books`;
    console.log(url);
    console.log(bookObj);
    try { 
      let response = await axios.post(url, bookObj);
      console.log(response.data);
      let newBookArray = this.state.books.push(response.data);
      console.log(this.state.books);
      this.setState({books: newBookArray});
      console.log(this.state.books); 
    } catch(e) {
      console.log(e);

    }
  }

  getBooks = async () => {
    let url = 'http://localhost:3001/books';
    try {
      const response = await axios.get(url);
      this.setState({books: response.data});
      console.log(this.state.books);
    } catch (e) {
      console.error(e.response);
      }
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler}/>
          <Switch>
            <Route exact path="/">
              {this.state.user ? <BestBooks books = {this.state.books} getBooks = {this.getBooks}/> : <Login loginHandler = {this.loginHandler}/>}
            </Route>
            <Route exact path = '/profile'>
              <Profile user = {this.state.user}/>
            </Route>
          </Switch>
          {this.state.user ? <BookFormModal postBook = {this.postBook} user = {this.state.user} closeModal = {this.closeModal}/> : false}
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;

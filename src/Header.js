import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton0.js';
import {withAuth0} from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user ? <NavItem><Link to="/profile" className="nav-link">profile</Link></NavItem> : false}
        {this.props.auth0.isAuthenticated ? <LogoutButton/> : false}
      </Navbar>
    )
  }
}

export default withAuth0(Header);

import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {this.props.user ? <NavItem><Link to="/profile" className="nav-link">profile</Link></NavItem> : false}
        {this.props.user ? <LogoutButton onLogout = {this.props.onLogout}/> : false}
      </Navbar>
    )
  }
}

export default Header;

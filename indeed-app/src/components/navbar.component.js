import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Indeed Jobs Poster</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Jobs</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Job</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
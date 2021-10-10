import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nabvar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink 
              activeClassName="active"
              className="nav-item nav-link" 
              exact
              to="/home">
                Home
            </NavLink>

            <NavLink 
              activeClassName="active"
              className="nav-item nav-link" 
              exact
              to="/users">
                Users
            </NavLink>

            <NavLink 
              activeClassName="active"
              className="nav-item nav-link" 
              exact
              to="/questions">
                  Questions
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

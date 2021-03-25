import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <ul className="list">
      <li>
        <NavLink
          to="/"
          exact
          className="NavLink"
          activeClassName="NavLinkActive"
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink
            to="/contacts"
            exact
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

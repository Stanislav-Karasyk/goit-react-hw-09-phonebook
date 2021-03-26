import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
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
        {isLoggedIn && (
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
}

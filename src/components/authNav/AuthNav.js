import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <ul className="list">
        <li>
          <NavLink
            exact
            to="/register"
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/login"
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;

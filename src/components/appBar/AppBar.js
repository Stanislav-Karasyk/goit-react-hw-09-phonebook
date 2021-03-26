import React from 'react';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

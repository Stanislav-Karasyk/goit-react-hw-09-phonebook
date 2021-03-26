import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getCurrentUser } from '../redux/auth/auth-operations';
import AppBar from './appBar/AppBar';
import Container from '../components/container/Container';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const HomePage = lazy(() =>
  import('../pages/homePage/HomePage' /* webpackChunkName: "homePage" */),
);
const RegisterPage = lazy(() =>
  import(
    '../pages/registerPage/RegisterPage' /* webpackChunkName: "registerPage" */
  ),
);
const LoginPage = lazy(() =>
  import('../pages/loginPage/LoginPage' /* webpackChunkName: "loginPage" */),
);
const ContactsPage = lazy(() =>
  import(
    '../pages/contactsPage/ContactsPage' /* webpackChunkName: "contactsPage" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterPage />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}

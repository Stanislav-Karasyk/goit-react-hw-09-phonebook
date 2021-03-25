import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsPage}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

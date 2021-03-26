import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';

// const mapStateToProps = state => ({
//   error: state.auth.error,
// });

const initialState = {
  email: '',
  password: '',
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  // const error = useSelector(user.error)

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn(user));
    setUser(initialState);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {/* <h2>{error}</h2> */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">login</button>
      </form>
    </div>
  );
}

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const error = useSelector(user.error);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register(user));
    setUser(initialState);
  };

  return (
    <div>
      <h1>Register Page</h1>
      {/* <h2>{error}</h2> */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

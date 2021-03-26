import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createContact,
  fetchContacts,
} from '../../redux/contact/contact-operations';

const initialState = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createContact(user));
    setUser(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          name="name"
          type="text"
          onChange={handleInput}
          value={user.name}
        />
      </label>
      <label>
        Number
        <input
          name="number"
          type="text"
          onChange={handleInput}
          value={user.number}
        />
      </label>
      <button type="submit">Add contacts</button>
    </form>
  );
}

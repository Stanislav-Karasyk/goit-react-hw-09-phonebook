import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-operations';
import {
  getFilteredContacts,
  getLoadind,
} from '../../redux/contact/contact-selectors';

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoadind);

  const onHandleChange = e => {
    dispatch(deleteContact(e.target.id));
  };

  return (
    <>
      {loading && <h2>Loading...</h2>}
      <ul className="list">
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
              <button id={id} type="button" onClick={onHandleChange}>
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

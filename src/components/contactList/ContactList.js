import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-operations';
import { getError, getFilteredContacts, getLoadind} from '../../redux/contact/contact-selectors';

const ContactList = ({ contacts, deleteContact, loading }) => {
  const onHandleChange = e => {
    deleteContact(e.target.id);
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
};

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
  loading: getLoadind(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

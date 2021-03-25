import React, { Component } from 'react';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactList from '../../components/contactList/ContactList';
import Filter from '../../components/filter/Filter';

class ContactsPage extends Component {
  render() {
    return (
      <div>
        <h2>Add contacts</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  }
}

export default ContactsPage;

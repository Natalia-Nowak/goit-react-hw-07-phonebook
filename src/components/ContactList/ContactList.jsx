import React from 'react';
import './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/reducers/contactsSlice';

export default function ContactList() {
  const contactList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className="contact-list">
      {contactList
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li className="contact-list-item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="button-list"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

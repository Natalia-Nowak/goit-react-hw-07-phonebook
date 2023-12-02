import React, { useEffect } from 'react';
import './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/reducers/operations';

export default function ContactList() {
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  console.log(contactList);
  return (
    <ul className="contact-list">
      {contactList === null ? (
        <p>Please wait...</p>
      ) : (
        contactList
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li className="contact-list-item" key={contact.id}>
              {contact.name}: {contact.phone}
              <button
                className="button-list"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))
      )}
    </ul>
  );
}

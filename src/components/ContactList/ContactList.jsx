import React, { useEffect } from 'react';
import './ContactList.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/reducers/operations';
import {
  selectContactsError,
  selectContactsIsLoading,
  selectContactsItems,
} from 'components/selectors';

export default function ContactList() {
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);
  const contactList = useSelector(selectContactsItems);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  if (error) return <p>error...</p>;
  console.log(contactList);
  return (
    <ul className="contact-list">
      {isLoading && <p>Loading...</p>}
      {contactList
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
        ))}
    </ul>
  );
}

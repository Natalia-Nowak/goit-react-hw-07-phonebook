import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/contactsSlice';
import { filterReducer } from './reducers/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;

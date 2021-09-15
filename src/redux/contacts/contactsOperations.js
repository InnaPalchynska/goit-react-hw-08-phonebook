import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsApi from '../../services/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'сontacts/fetchContactsRequest',
  async (type, { rejectWithValue }) => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchAddContacts = createAsyncThunk(
  'сontacts/fetchAddContactsRequest',
  async (contact, { rejectWithValue }) => {
    try {
      await contactsApi.fetchAddContacts(contact);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchDeleteContacts = createAsyncThunk(
  'сontacts/fetchDeleteContactsRequest',
  async (contactId, { rejectWithValue }) => {
    try {
      await contactsApi.fetchDeleteContacts(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export default {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
};

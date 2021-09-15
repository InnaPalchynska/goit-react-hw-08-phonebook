import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actionContacts from './contactsActions';
import {
  fetchContacts,
  fetchAddContacts,
  fetchDeleteContacts,
} from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, { payload }) => payload,
  [fetchAddContacts.fulfilled]: (state, { payload }) => [payload, ...state],
  [fetchDeleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actionContacts.filterContact]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });

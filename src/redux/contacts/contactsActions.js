import { createAction } from '@reduxjs/toolkit';

export const filterContact = createAction('contacts/filter');

export default {
  filterContact,
};

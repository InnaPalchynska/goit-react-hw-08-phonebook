import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/contacts/contactsSelectors';
import operations from '../../redux/contacts/contactsOperations';

const ContactList = () => {
  const visibleContacts = useSelector(selectors.getVisibleContacts);

  const dispatch = useDispatch();
  if (visibleContacts.length === 0) return null;
  return (
    <ul>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            onClick={id => dispatch(operations.fetchDeleteContacts(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

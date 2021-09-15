import { useSelector, useDispatch } from 'react-redux';
import selectors from '../../redux/contacts/contactsSelectors';
import actions from '../../redux/contacts/contactsActions';

const Filter = () => {
  const filterValue = useSelector(selectors.getContactsFilter);
  const dispatch = useDispatch(actions.filterContact);
  return (
    <input
      type="text"
      onChange={e => dispatch(actions.filterContact(e.target.value))}
      value={filterValue}
      placeholder="Enter name "
    />
  );
};

export default Filter;

import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Hello, {name}</span>
      <Avatar src="/broken-image.jpg" style={styles.avatar} />
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Log out
      </button>
    </div>
  );
}

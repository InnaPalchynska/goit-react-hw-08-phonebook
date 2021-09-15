import React from 'react';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome page <span role="img" aria-label="welcomeIcon"></span>
      <ContactPhoneIcon style={{ fontSize: 40 }} />
    </h1>
  </div>
);

export default HomeView;

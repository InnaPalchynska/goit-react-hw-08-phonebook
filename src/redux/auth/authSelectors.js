const getIsLoggedIn = state => state.auth.user.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.user.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;

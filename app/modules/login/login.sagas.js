import { call, put, select } from 'redux-saga/effects';

import AccountActions from '../../shared/reducers/account.reducer';
import LoginActions from './login.reducer';

export const selectAuthToken = state => state.login.authToken;
// attempts to login
export function* login(api, { username, password }) {
  const authObj = {
    username,
    password,
    rememberMe: true,
  };

  const response = yield call(api.login, authObj);

  // success?
  if (response.ok) {
    yield call(api.setAuthToken, response.data.id_token);
    yield put(LoginActions.loginSuccess(response.data.id_token));
    yield put(AccountActions.accountRequest());
    yield put({ type: 'RELOGIN_OK' });
  } else {
    const errorMessage = !response.data
      ? 'Failed to reach backend API'
      : response.data && response.data.detail
        ? response.data.detail
        : 'Bad credentials';
    yield put(LoginActions.loginFailure(errorMessage));
  }
}
// attempts to logout
export function* logout(api) {
  yield call(api.removeAuthToken);
  yield put(AccountActions.accountReset());
  yield put(AccountActions.accountRequest());
  yield put(LoginActions.logoutSuccess());
  yield put({ type: 'RELOGIN_ABORT' });
}

// loads the login
export function* loginLoad(api) {
  const authToken = yield select(selectAuthToken);
  // only set the token if we have it
  if (authToken) {
    yield call(api.setAuthToken, authToken);
  }
  yield put(LoginActions.loginLoadSuccess());
}

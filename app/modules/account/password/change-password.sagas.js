import { call, put } from 'redux-saga/effects';

import { callApi } from '../../../shared/sagas/call-api.saga';
import ChangePasswordActions from './change-password.reducer';

// attempts to request a password change
export function* changePassword(api, { currentPassword, newPassword }) {
  const apiCall = call(api.changePassword, currentPassword, newPassword);
  const response = yield call(callApi, apiCall);
  // success?
  if (response.ok) {
    console.log('ChangePasswordRequest - OK');
    yield put(ChangePasswordActions.changePasswordSuccess());
  } else {
    console.log('ChangePassword - FAIL');
    yield put(ChangePasswordActions.changePasswordFailure((response.data && response.data.title) || 'Failed to change password'));
  }
}

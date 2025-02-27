import { put } from 'redux-saga/effects';
import FixtureAPI from '../../../../app/shared/services/fixture-api';
import UserSagas from '../../../../app/shared/sagas/user.sagas';
import UserActions from '../../../../app/shared/reducers/user.reducer';

const stepper = fn => mock => fn.next(mock).value;

test('getAll success path', () => {
  const response = FixtureAPI.getAllUsers();
  const step = stepper(UserSagas.getAllUsers(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserActions.userAllSuccess([{ id: 1 }, { id: 2 }])));
});

test('getAll failure path', () => {
  const response = { ok: false };
  const step = stepper(UserSagas.getAllUsers(FixtureAPI, { options: { page: 0, sort: 'id,asc', size: 20 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserActions.userAllFailure()));
});

test('get success path', () => {
  const response = FixtureAPI.getUser(1);
  const step = stepper(UserSagas.getUser(FixtureAPI, { userId: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserActions.userSuccess({ id: 1 })));
});

test('get failure path', () => {
  const response = { ok: false };
  const step = stepper(UserSagas.getUser(FixtureAPI, { userId: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserActions.userFailure()));
});

test('update success path', () => {
  const response = FixtureAPI.updateUser({ id: 1 });
  const step = stepper(UserSagas.updateUser(FixtureAPI, { user: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserActions.userUpdateSuccess({ id: 1 })));
});

test('update failure path', () => {
  const response = { ok: false };
  const step = stepper(UserSagas.updateUser(FixtureAPI, { user: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserActions.userUpdateFailure()));
});

test('delete success path', () => {
  const response = FixtureAPI.deleteUser({ id: 1 });
  const step = stepper(UserSagas.deleteUser(FixtureAPI, { userId: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Successful return and data!
  expect(step(response)).toEqual(put(UserActions.userDeleteSuccess({ id: 1 })));
});

test('delete failure path', () => {
  const response = { ok: false };
  const step = stepper(UserSagas.deleteUser(FixtureAPI, { userId: { id: 1 } }));
  // Step 1: Hit the api
  step();
  // Step 2: Failed response.
  expect(step(response)).toEqual(put(UserActions.userDeleteFailure()));
});

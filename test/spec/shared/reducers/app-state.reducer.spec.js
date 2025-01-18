import Actions, { INITIAL_STATE, reducer } from '../../../../app/shared/reducers/app-state.reducer';

test('rehydration complete', () => {
  const state = reducer(INITIAL_STATE, Actions.setRehydrationComplete());

  expect(state.rehydrationComplete).toBe(true);
});

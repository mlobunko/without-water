import { combineReducers, createStore } from 'redux';
import authorized from 'shared/authorized';
import error from 'shared/error';
import fetching from 'shared/fetching';
import logIn from 'app/pages/logIn';
import news from 'app/pages/news';
import profile from 'app/pages/profile';

import reducer from '../rootReducer';

it('should return the same state', () => {
  const store = createStore(reducer);
  const expectedStore = createStore(
    combineReducers({
      [authorized.constants.NAME]: authorized.reducer,
      [logIn.constants.NAME]: logIn.reducer,
      [error.constants.NAME]: error.reducer,
      [fetching.constants.NAME]: fetching.reducer,
      [news.constants.NAME]: news.reducer,
      [profile.constants.NAME]: profile.reducer
    })
  );
  expect(store.getState()).toEqual(expectedStore.getState());
});

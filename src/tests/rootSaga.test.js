import { expectSaga } from 'redux-saga-test-plan';

import logIn from 'app/pages/logIn';
import news from 'app/pages/news';
import profile from 'app/pages/profile';

import rootSaga from '../rootSaga';

it('should call same forks', () => {
  return expectSaga(rootSaga)
    .fork(logIn.saga.submitLogIn)
    .fork(news.saga.fetchNews)
    .fork(profile.saga.fetchProfile)
    .silentRun();
});

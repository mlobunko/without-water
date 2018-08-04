import { all, fork } from 'redux-saga/effects';
import logIn from 'app/pages/logIn';
import news from 'app/pages/news';
import profile from 'app/pages/profile';

export default function* rootSaga() {
  yield all([
    fork(logIn.saga.submitLogIn),
    fork(news.saga.fetchNews),
    fork(profile.saga.fetchProfile)
  ]);
}

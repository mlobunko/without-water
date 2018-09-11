import { all, call, spawn } from 'redux-saga/effects';

import logIn from 'app/pages/logIn';
import news from 'app/pages/news';
import profile from 'app/pages/profile';

export default function* rootSaga() {
  const sagas = [
    logIn.saga.submitLogIn,
    news.saga.fetchNews,
    profile.saga.fetchProfile
  ];

  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}

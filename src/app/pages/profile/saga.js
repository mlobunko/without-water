import { take, call, put, select } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import * as model from './model';
import * as t from './actionTypes';

import error from 'shared/error';
import fetching from 'shared/fetching';
import logIn from 'app/pages/logIn';

export const fetchProfile = function*() {
  while (true) {
    yield take(t.FETCH);
    try {
      yield put(fetching.actions.on());
      const logInState = yield select(logIn.selectors.getAll);
      const response = yield call(fetch, model.getProfile(logInState));
      yield put(fetching.actions.off());
      const data = yield call([response, response.json]);
      if (data.status === 'ok') {
        let { city, languages, social } = yield data.data;
        yield put(actions.addCity(city));
        yield put(actions.addLanguages(languages));
        yield put(actions.addSocial(social));
      } else {
        yield error.saga.errorHandler({
          login: true,
          message: constants.ERROR_TRANSLATE[data.message]
        });
      }
    } catch (e) {
      yield error.saga.errorHandler({ loading: true });
    }
  }
};

import { take, call, put } from 'redux-saga/effects';

import authorized from 'shared/authorized';
import error from 'shared/error';
import fetching from 'shared/fetching';

import * as actions from './actions';
import * as t from './actionTypes';
import * as constants from './constants';
import * as model from './model';

export const submitLogIn = function*() {
  while (true) {
    const action = yield take(t.SUBMIT);
    try {
      yield put(fetching.actions.on());
      const response = yield call(
        fetch,
        constants.POST_REQUEST,
        model.init(action.payload)
      );
      yield put(fetching.actions.off());
      const data = yield call([response, response.json]);
      if (data.status === 'ok') {
        yield put(authorized.actions.logIn());
        yield put(actions.set(data.data.id));
      } else {
        yield call(error.saga.errorHandler, {
          login: true,
          message: constants.ERROR_TRANSLATE[data.message]
        });
      }
    } catch (e) {
      yield call(error.saga.errorHandler, { loading: true });
    }
  }
};

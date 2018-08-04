import { take, call, put } from 'redux-saga/effects';
import * as t from './actionTypes';
import * as actions from './actions';
import * as constants from './constants';
import fetching from 'shared/fetching';
import error from 'shared/error';

export const fetchNews = function*() {
  while (true) {
    yield take(t.FETCH);
    try {
      yield put(fetching.actions.on());
      const response = yield call(fetch, constants.REQUEST_NEWS);
      yield put(fetching.actions.off());
      const data = yield call([response, response.json]);
      if (data.status === 'ok') {
        yield put(actions.add(data.data));
      } else {
        yield error.saga.errorHandler();
      }
    } catch (e) {
      yield error.saga.errorHandler({ loading: true });
    }
  }
};

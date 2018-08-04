import { put } from 'redux-saga/effects';
import fetching from 'shared/fetching';
import * as actions from './actions';
import * as constants from './constants';

export const errorHandler = function*({
  loading = false,
  login = false,
  message = ''
}) {
  if (loading) {
    yield put(fetching.actions.off());
  }
  if (login) {
    yield put(actions.setLogin(message));
  } else {
    yield put(actions.setServer(constants.ERROR_AVAILABLE_SERVER));
  }
};

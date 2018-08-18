import { expectSaga } from 'redux-saga-test-plan';
import { call } from 'redux-saga/effects';
import { throwError } from 'redux-saga-test-plan/providers';

import error from 'shared/error';

import * as actions from '../actions';
import fetching from 'shared/fetching';
import * as constants from '../constants';
import { fetchNews } from '../saga';

describe('fetchNews saga', () => {
  const initialData = {
    status: 'ok',
    data: '123'
  };
  const initialResponse = {
    data: '123',
    json: () => {}
  };

  it('add news to redux', () => {
    const data = {
      ...initialData
    };
    const response = {
      ...initialResponse
    };

    return expectSaga(fetchNews)
      .provide([
        [call(fetch, constants.REQUEST_NEWS), response],
        [call([response, response.json]), data]
      ])
      .put(fetching.actions.on())
      .put(fetching.actions.off())
      .put(actions.add(data.data))
      .dispatch(actions.fetch())
      .silentRun();
  });

  it('server error', () => {
    const errorObj = new Error('error');

    return expectSaga(fetchNews)
      .provide([[call(fetch, constants.REQUEST_NEWS), throwError(errorObj)]])
      .call(error.saga.errorHandler, { loading: true })
      .dispatch(actions.fetch())
      .silentRun();
  });

  it('data error', () => {
    const response = {
      ...initialResponse
    };
    const data = {
      ...initialData,
      status: 'error'
    };

    return expectSaga(fetchNews)
      .provide([
        [call(fetch, constants.REQUEST_NEWS), response],
        [call([response, response.json]), data]
      ])
      .call(error.saga.errorHandler)
      .dispatch(actions.fetch())
      .silentRun();
  });
});

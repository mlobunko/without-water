import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import * as actions from '../actions';
import * as constants from '../constants';
import * as model from '../model';
import authorized from 'shared/authorized';
import error from 'shared/error';
import fetching from 'shared/fetching';

import { submitLogIn } from '../saga';

describe('submitLogIn', () => {
  const localStorageMock = (function() {
    return {
      setItem: jest.fn(),
      clear: jest.fn()
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });

  const response = {
    json: () => {}
  };

  const initialData = {
    status: 'ok',
    data: {
      id: 1
    }
  };

  const payloadAction = {
    email: 'faf@fa.com',
    password: '123456'
  };

  it('should set id', () => {
    const data = {
      ...initialData
    };

    return expectSaga(submitLogIn)
      .provide([
        [
          call(fetch, constants.POST_REQUEST, model.init(payloadAction)),
          response
        ],
        [call([response, response.json]), data]
      ])
      .put(fetching.actions.on())
      .put(fetching.actions.off())
      .put(authorized.actions.logIn())
      .put(actions.set(data.data.id))
      .dispatch(actions.submit(payloadAction))
      .silentRun();
  });

  it('handle data error', () => {
    const data = {
      status: 'error'
    };

    return expectSaga(submitLogIn)
      .provide([
        [
          call(fetch, constants.POST_REQUEST, model.init(payloadAction)),
          response
        ],
        [call([response, response.json]), data]
      ])
      .call(error.saga.errorHandler, {
        login: true,
        message: constants.ERROR_TRANSLATE[data.message]
      })
      .dispatch(actions.submit(payloadAction))
      .silentRun();
  });

  it('handle server error', () => {
    const erorrObj = new Error('error');

    return expectSaga(submitLogIn)
      .provide([
        [
          call(fetch, constants.POST_REQUEST, model.init(payloadAction)),
          throwError(erorrObj)
        ]
      ])
      .call(error.saga.errorHandler, { loading: true })
      .dispatch(actions.submit(payloadAction))
      .silentRun();
  });
});

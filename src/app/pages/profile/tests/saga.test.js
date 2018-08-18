import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import error from 'shared/error';
import fetching from 'shared/fetching';

import * as actions from '../actions';
import * as constants from '../constants';
import * as model from '../model';
import { fetchProfile } from '../saga';

describe('fetchProfile', () => {
  const storeState = {
    logIn: 1
  };
  const response = {
    json: () => {}
  };
  const initialData = {
    status: 'ok',
    data: {
      city: 'London',
      languages: 'english',
      social: 'web'
    }
  };

  it('add the info to the profile', () => {
    const data = {
      ...initialData
    };

    return expectSaga(fetchProfile)
      .withState(storeState)
      .provide([
        [call(fetch, model.getProfile(storeState.logIn)), response],
        [call([response, response.json]), data]
      ])
      .put(fetching.actions.on())
      .put(fetching.actions.off())
      .put(actions.addCity(data.data.city))
      .put(actions.addLanguages(data.data.languages))
      .put(actions.addSocial(data.data.social))
      .dispatch(actions.fetch())
      .silentRun();
  });

  it('data error', () => {
    const data = {
      ...initialData,
      status: 'error'
    };

    return expectSaga(fetchProfile)
      .withState(storeState)
      .provide([
        [call(fetch, model.getProfile(storeState.logIn)), response],
        [call([response, response.json]), data]
      ])
      .call(error.saga.errorHandler, {
        login: true,
        message: constants.ERROR_TRANSLATE[data.message]
      })
      .dispatch(actions.fetch())
      .silentRun();
  });

  it('server error', () => {
    const errorObj = new Error('error');

    return expectSaga(fetchProfile)
      .withState(storeState)
      .provide([
        [call(fetch, model.getProfile(storeState.logIn)), throwError(errorObj)]
      ])
      .call(error.saga.errorHandler, { loading: true })
      .dispatch(actions.fetch())
      .silentRun();
  });
});

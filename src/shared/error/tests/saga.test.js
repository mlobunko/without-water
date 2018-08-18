import { expectSaga } from 'redux-saga-test-plan';

import * as actions from '../actions';
import fetching from 'shared/fetching';
import * as constants from '../constants';

import { errorHandler } from '../saga';

describe('the error handler saga', () => {
  it('handle the fetching and the login error', () => {
    const props = {
      loading: true,
      login: true,
      message: '123'
    };

    return expectSaga(errorHandler, props)
      .put(fetching.actions.off())
      .put(actions.setLogin(props.message))
      .run();
  });

  it('handle the server error', () => {
    const props = {
      loading: false,
      login: false,
      message: ''
    };

    return expectSaga(errorHandler, props)
      .put(actions.setServer(constants.ERROR_AVAILABLE_SERVER))
      .run();
  });
});

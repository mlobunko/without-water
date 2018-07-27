import { take, call, put } from "redux-saga/effects";
import {
  setFetchingOn,
  setFetchingOff
} from "../../../redux/actions/fetchingActions";
import {
  setErrorLogin,
  setErrorServer
} from "../../../redux/actions/settingErrorActions";
import { logIn, setId } from "../../../redux/actions/loginLogoutActions";
import { postRequest, myInit } from "../../../helpers/configFetch";
import { errorLibrary } from "../../../helpers/errorLibrary";

export function* submitLogIn() {
  while (true) {
    const action = yield take("SUBMIT_LOGIN_FORM_SAGA");
    try {
      yield put(setFetchingOn());
      const response = yield call(fetch, postRequest, myInit(action.payload));
      yield put(setFetchingOff());
      const data = yield call([response, response.json]);
      if (data.status === "ok") {
        yield put(logIn());
        yield put(setId(data.data.id));
      } else {
        yield put(setErrorLogin(errorLibrary[data.message]));
      }
    } catch (e) {
      yield put(setFetchingOff());
      yield put(setErrorServer(errorLibrary["server_is_not_available"]));
    }
  }
}

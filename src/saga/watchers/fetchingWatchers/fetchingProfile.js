import { take, call, put, select } from "redux-saga/effects";
import {
  setFetchingOn,
  setFetchingOff
} from "../../../redux/actions/fetchingActions";
import {
  setCity,
  setLanguages,
  setSocial
} from "../../../redux/actions/settingUserInfoActions";
import {
  setErrorLogin,
  setErrorServer
} from "../../../redux/actions/settingErrorActions";
import { getProfile } from "../../../helpers/configFetch";
import { errorLibrary } from "../../../helpers/errorLibrary";
import { placeWebIconFirst } from "../../../helpers/converters";

export function* fetchingProfile() {
  while (true) {
    yield take("FETCH_PROFILE");
    try {
      yield put(setFetchingOn());
      const state = yield select();
      const response = yield call(fetch, getProfile(state.user.id));
      yield put(setFetchingOff());
      const data = yield call([response, response.json]);
      if (data.status === "ok") {
        let { city, languages, social } = yield data.data;
        yield put(setCity(city));
        yield put(setLanguages(languages));
        yield put(setSocial(placeWebIconFirst(social)));
      } else {
        yield put(setErrorLogin(errorLibrary[data.message]));
      }
    } catch (e) {
      yield put(setFetchingOff());
      yield put(setErrorServer(errorLibrary["server_is_not_available"]));
    }
  }
}

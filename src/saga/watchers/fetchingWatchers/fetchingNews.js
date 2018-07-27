import { take, call, put } from "redux-saga/effects";
import { addNews } from "../../../redux/actions/newsActions";
import {
  setFetchingOn,
  setFetchingOff
} from "../../../redux/actions/fetchingActions";
import { setErrorServer } from "../../../redux/actions/settingErrorActions";
import { getRequestNews } from "../../../helpers/configFetch";
import { errorLibrary } from "../../../helpers/errorLibrary";

export function* fetchingNews() {
  while (true) {
    yield take("FETCH_NEWS");
    try {
      yield put(setFetchingOn());
      const response = yield call(fetch, getRequestNews);
      yield put(setFetchingOff());
      const data = yield call([response, response.json]);
      if (data.status === "ok") {
        yield put(addNews(data.data));
      } else {
        yield put(setErrorServer(errorLibrary["server_is_not_available"]));
      }
    } catch (e) {
      yield put(setFetchingOff());
      yield put(setErrorServer(errorLibrary["server_is_not_available"]));
    }
  }
}

import { all, fork } from "redux-saga/effects";
import { submitLogIn } from "./watchers/submittingWatchers/submitLogIn";
import { fetchingProfile } from "./watchers/fetchingWatchers/fetchingProfile";
import { fetchingNews } from "./watchers/fetchingWatchers/fetchingNews";

export default function* rootSaga() {
  yield all([fork(submitLogIn), fork(fetchingNews), fork(fetchingProfile)]);
}

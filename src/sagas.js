import { call, put, all, fork, takeEvery, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "./actions";
import { fetchPostsData } from "./api";
import { fetchCommentsData } from "./api";

function* getPostsApiData(action) {
  try {
    // do api call
    const data = yield call(fetchPostsData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getCommentsApiData(action) {
  try {
    // do api call
    const data = yield call(fetchCommentsData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getPostsApiData);
}

function* mySaga2() {
  yield takeLatest(REQUEST_API_DATA, getCommentsApiData);
}

export default function* rootSaga(){
  yield all([
    fork(mySaga),
    fork(mySaga2)
  ]);
}

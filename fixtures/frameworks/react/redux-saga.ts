import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '...';

// Worker saga will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action: any) {
    try {
        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({ type: 'USER_FETCH_SUCCEEDED', user: user });
    } catch (e) {
        yield put({ type: 'USER_FETCH_FAILED', message: e.message });
    }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* mySaga() {
    yield takeEvery('USER_FETCH_REQUESTED', fetchUser);
}

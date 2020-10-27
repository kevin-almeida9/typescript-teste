import { call, put,takeLatest } from 'redux-saga/effects';
import api from '../../services/api'
import { receiveApiData } from './actions'

const loadNotes = async () => {
    const test = await api.get('notes')
    console.log(test.data)
    return test.data
}


function* getApiData(action: any) {
    try {
        // do api call
        const data = yield call(loadNotes)
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    yield takeLatest("REQUEST_API_DATA", getApiData);
}

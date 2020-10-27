import { call, put, takeLatest, all } from 'redux-saga/effects';
import api from '../../services/api'
import { receiveApiData, remove, add } from './actions'

const loadNotes = async () => {
    const test = await api.get('notes')
    return test.data
}

const removeNote = async (id: string) => {
    const response = await api.delete(`notes/${id}`)
    return response
}

const addNote = async (payload: any) => {
    let result: any = await api.post('notes', { ...payload })
    return result.data
}


function* getApiData() {
    try {
        // do api call
        const data = yield call(loadNotes)
        yield put(receiveApiData(data));
    } catch (e) {
        console.error(e);
    }
}

function* deleteNote(payload: any) {
    try {
        yield call(removeNote, payload.id);
        yield put(remove(payload.id))
    } catch (e) {
        console.error(e);
    }
}

function* createNote(action: any) {
    try {
        const data = yield call(addNote, action.payload);
        yield put(add(data))
    } catch (e) {
        console.error(e);
    }
}
/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
    all([
        yield takeLatest("REQUEST_API_DATA", getApiData),
        //@ts-ignore
        yield takeLatest("REQUEST_DELETE", deleteNote),
        yield takeLatest("REQUEST_CREATE", createNote)
    ])
}

import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import noteReducer from './notes/reducer'
import mySaga from './notes/sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    notes: noteReducer
})



const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)

export default store
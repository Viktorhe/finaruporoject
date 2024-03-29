// eslint-disable-next-line
import {applyMiddleware, createStore, compose} from 'redux'
import myReducer from './reducer'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const mid = applyMiddleware(thunk,logger)
const mid = applyMiddleware(thunk)
const Store = createStore(myReducer, composeEnhancers(mid))
export default Store
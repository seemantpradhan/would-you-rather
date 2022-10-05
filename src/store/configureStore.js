import {createStore,applyMiddleware,compose} from 'redux'
import combineReducers from '../reducers/combinedReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore=()=>{
    const store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk, logger)));
    return store;
}

export default configureStore;

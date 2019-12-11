// A reducer which combines both the project and auth reducers into one

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;
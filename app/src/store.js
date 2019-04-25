
import { createStore, combineReducers } from 'redux';

import core from './reducers/core';

const combined = combineReducers({
    core: core
});

const store = createStore(combined);

export default store;
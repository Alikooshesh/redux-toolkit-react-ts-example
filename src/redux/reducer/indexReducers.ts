import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {default as addReducer} from './addReducer/addReducer'

const combinedReducers = combineReducers({
    number : addReducer
})


const persistedReducer = persistReducer({key : 'rootPersistor',storage , whitelist:['number']},combinedReducers)
export default persistedReducer
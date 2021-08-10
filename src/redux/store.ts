import {createStore} from "@reduxjs/toolkit";
import persistedReducer from "./reducer/indexReducers";
import {persistStore} from "redux-persist";

export const store = createStore(persistedReducer)
export const persistore = persistStore(store)
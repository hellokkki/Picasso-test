import { combineReducers } from "@reduxjs/toolkit";
import { postApi } from "../../shared/postsApi";
import { postSLiceReducer } from "../../entities/postSlice.ts";

export const rootReducer = combineReducers({
    [postApi.reducerPath]: postApi.reducer,
    postSLiceReducer
})

export type RootReducerState = ReturnType<typeof rootReducer>
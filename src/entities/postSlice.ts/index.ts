import { createSlice, createSelector } from "@reduxjs/toolkit";
import { IPostState } from "../../shared/typing/interfaces/IPostState";
import { TPostSerialized } from "../../shared/typing/types/TPost";

const inititalPostState: IPostState = {
  post: {},
};

const postSlice = createSlice({
  name: "Post",
  initialState: inititalPostState,
  reducers: {
    setPost(state, action: { payload: { post: IPostState["post"] } }) {
      state.post = action.payload.post;
    },
    clearPost(state) {
      state.post = {};
    },
  },
});

export const { setPost, clearPost } = postSlice.actions;

export const postSLiceReducer = postSlice.reducer;
export const selectPost = createSelector(
    (state: any) => state.post,
    (post) => post
  );

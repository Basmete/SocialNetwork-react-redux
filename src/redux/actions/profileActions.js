import { ADD_POST, UPDATE_NEW_POST_TEXT } from "../constants";

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText,
});

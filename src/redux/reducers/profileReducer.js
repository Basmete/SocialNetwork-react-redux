import { profileAPI } from "../../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "Шо по прицелу?", likesCount: 12 },
    { id: 2, message: "Шо по прицелу?", likesCount: 12 },
    { id: 3, message: "Шо по прицелу?", likesCount: 12 },
    { id: 4, message: "Шо по прицелу?", likesCount: 12 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }

    case DELETE_POST: {
      const newPosts = [...state.posts].filter((item) => item.id !== action.id);
      return {
        ...state,
        posts: newPosts,
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const deletePost = (id) => ({ type: DELETE_POST, id });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfileThunk = (userId) => async (dispatch) => {
  if (!userId) {
    userId = 2;
  }
  const data = await profileAPI.getUserProfile(userId);

  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;

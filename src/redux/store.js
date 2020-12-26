import {
  profileReducer,
  dialogsReducer,
  sidebarReducer,
} from "./reducers/reducers";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message:
            "Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? ",
          likesCount: 12,
        },
        { id: 1, message: "Шо по прицелу?", likesCount: 12 },
        { id: 1, message: "Шо по прицелу?", likesCount: 12 },
        { id: 1, message: "Шо по прицелу?", likesCount: 12 },
      ],
      newPostText: "456",
    },
    messagesPage: {
      messages: [
        { id: 1, message: "123" },
        { id: 2, message: "Hi" },
        { id: 3, message: "What's up?" },
        { id: 4, message: "Ready for release!" },
      ],
      dialogs: [
        { id: 1, name: "Dimas" },
        { id: 2, name: "Azat" },
        { id: 3, name: "Sanya" },
        { id: 4, name: "Kizbek" },
      ],
      newMessageBody: "",
    },
    sidebar: {},
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.messagesPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;

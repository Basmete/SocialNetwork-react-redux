const SEND_MESSAGE = "SEND_MESSAGE";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: action.id, message: body }],
      };

    default:
      return state;
  }
};

export default dialogsReducer;

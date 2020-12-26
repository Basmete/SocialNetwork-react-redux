import { SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY } from "../constants";

export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export const newMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body,
});

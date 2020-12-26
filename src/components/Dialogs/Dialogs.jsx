import React from "react";
import DialogItem from "./DialogItem";
import Message from "./Message";
import * as c from "./Dialogs.module.css";
import id from "uniqid";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../common/FormControls/TextArea";
import { maxLengthCreator, required } from "../../utils/validators";

const maxLength200 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newMessageBody"
          label="Enter your message"
          validate={[required, maxLength200]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogsAddMessageForm",
})(AddMessageForm);

const Dialogs = ({ state, sendMessage, isAuth }) => {
  const { dialogs, messages } = state;

  const dialogsElements = dialogs.map((item) => {
    return <DialogItem id={item.id} name={item.name} key={item.id} />;
  });

  const messagesElements = messages.map((item) => {
    return <Message id={item.id} message={item.message} key={item.id} />;
  });

  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
  };

  if (!isAuth) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div className={c.dialogs}>
      <div className={c.dialogsItems}>
        {dialogsElements}
        <div className={c.messages}>
          <div>{messagesElements}</div>
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;

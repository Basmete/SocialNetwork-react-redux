import React from "react";
import Post from "./Post";
import c from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { TextArea } from "../../common/FormControls/TextArea";

const maxLength50 = maxLengthCreator(50);

const AddNewPostForm = (props) => {
  return (
    <>
      <h3>My Posts</h3>
      <form onSubmit={props.handleSubmit}>
        <Field
          component={TextArea}
          name={"newPostText"}
          validate={[required, maxLength50]}
          props={{ placeholder: "kek" }}
          label="kek"
        />

        <div className={c.buttons}>
          <button className={c.marginRight}>Add post</button>
          <button>Remove</button>
        </div>
      </form>
    </>
  );
};

const AddNewPostFormRedux = reduxForm({
  form: "ProfileAddNewPostForm",
})(AddNewPostForm);

const MyPosts = (props) => {
  const posts = props.data.map((item) => {
    return (
      <Post
        id={item.id}
        message={item.message}
        likesCount={item.likesCount}
        key={item.id}
      />
    );
  });

  const addNewPost = (values) => {
    props.addPostActionCreator(values.newPostText);
  };

  return (
    <div className={c.postsBlock}>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;

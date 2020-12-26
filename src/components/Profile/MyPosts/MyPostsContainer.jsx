import MyPosts from "./MyPosts";

import { addPostActionCreator } from "../../../redux/actions/profileActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.profileReducer.posts,
    newPostText: state.profileReducer.newPostText,
  };
};

const mapDispatchToProps = {
  addPostActionCreator,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

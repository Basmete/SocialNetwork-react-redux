import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import {
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
  authReducer,
  appReducer,
} from "../redux/reducers/reducers";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersPage: usersReducer,
  authReducer,
  form: formReducer,
  appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;

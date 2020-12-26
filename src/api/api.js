import * as axios from "axios";
import { API_KEY } from "../constants";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": API_KEY,
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`/users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const getUserProfile = (userId) => {
  return instance.get(`/profile/${userId}`).then((response) => response.data);
};

export const followUser = (id) => {
  return instance.post(`/follow/${id}`, {}).then((response) => response.data);
};

export const unfollowUser = (id) => {
  return instance.delete(`/follow/${id}`).then((response) => response.data);
};

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  followUser(id) {
    return instance.post(`/follow/${id}`, {}).then((response) => response.data);
  },

  unfollowUser(id) {
    return instance.delete(`/follow/${id}`).then((response) => response.data);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`/profile/${userId}`).then((response) => response.data);
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`/profile/status`, { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`/auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`/auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`/auth/login`);
  },
};

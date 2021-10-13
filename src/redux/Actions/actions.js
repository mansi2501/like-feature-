import * as types from "./actionType";
import axios from "axios";

const getPosts = (posts) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDelete = () => ({
  type: types.DELETE_POST,
});

const postAdd = () => ({
  type: types.ADD_POST,
});

const getPost = (post) => ({
  type: types.GET_SINGLE_POST,
  payload: post,
});

const postEdit = () => ({
  type: types.EDIT_POST,
});

const postLike = () => ({
  type: types.LIKE_POST,
});

export const loadPosts = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:4000/posts")
      .then((res) => {
        dispatch(getPosts(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const addPost = (post) => {
  return function (dispatch) {
    axios
      .post("http://localhost:4000/posts", post)
      .then((res) => {
        dispatch(postAdd());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
  };
};

export const deletePost = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:4000/posts/${id}`)
      .then((res) => {
        dispatch(postDelete());
        dispatch(loadPosts());
      })
      .catch((error) => console.log(error));
  };
};

export const getSinglePost = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:4000/posts/${id}`)
      .then((res) => {
        dispatch(getPost(res.data));
      })
      .catch((error) => console.log(error));
  };
};

export const editPost = (post, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:4000/posts/${id}`, post)
      .then((res) => {
        dispatch(postEdit());
      })
      .catch((error) => console.log(error));
  };
};

export const likePost = (post) => {
  return function (dispatch) {
    axios
      .post("http://localhost:4000/likepost", post)
      .then((res) => {
        dispatch(postLike());
      })
      .catch((error) => console.log(error));
  };
};

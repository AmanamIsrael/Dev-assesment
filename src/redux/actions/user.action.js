import { createAsyncAction } from "redux-promise-middleware-actions";
import { Delete, Get, Post } from "./../../helpers/apiHandler";

export const actionType = {
  GET_USER: "GET_USER",
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
};

export const getUsers = createAsyncAction(actionType.GET_USER, async () => {
  return await Get();
});

export const addNewUser = createAsyncAction(
  actionType.ADD_USER,
  async (newUser) => {
    return await Post(newUser);
  }
);

export const deleteUser = createAsyncAction(
  actionType.DELETE_USER,
  async (userId) => {
    return await Delete(userId);
  }
);

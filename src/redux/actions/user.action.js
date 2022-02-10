import { createAsyncAction } from "redux-promise-middleware-actions";
import { Delete, Get, Patch, Post } from "../../helpers/apiHandler";
import {sortAsc, sortDsc} from "../../helpers/utils";

export const actionType = {
  GET_USER: "GET_USER",
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
    SORT_USER: "SORT_USER"
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
    const res = await Delete(userId);
    return { id: userId, ...res };
  }
);

export const editUser = createAsyncAction(
  actionType.EDIT_USER,
  async (userData, id) => {
    return await Patch(userData, id);
  }
);

export const sortUsers = (type, users) => {
    if(type === "asc") {
        return sortAsc(users)
    } else if (type === "dsc"){
    return sortDsc(users)
}
}

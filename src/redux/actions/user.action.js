import { createAsyncAction } from "redux-promise-middleware-actions";

export const actionType = {
  GET_USER: "GET_USER",
};

export const getUsers = createAsyncAction(actionType.GET_USER, async () => {
  return await fetch(
    "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
  ).then((users) => users.json());
});

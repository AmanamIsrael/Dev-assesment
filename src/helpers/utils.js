import * as _ from "lodash";

export const deleteUtil = (allUsers, id) => {
  return [...allUsers.filter((user) => user.id !== id)];
};

export const editUtil = (allUsers, user) => {
  const index = allUsers?.findIndex((el) => el.id === user.id);
  allUsers[index] = user;
  return allUsers;
};

export const getUserUtil = (allUsers, id) => {
  return allUsers?.find((el) => el.id === Number(id));
};

export const sortAsc = (allUsers) => {
  return _.sortBy(allUsers, ["username"], ["asc"]);
};

export const sortDsc = (allUsers) => {
  return _.orderBy(allUsers, ["username"], ["desc"]);
};

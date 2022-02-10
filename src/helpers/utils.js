export const deleteUtil = (allUsers, id) => {
  const index = allUsers.findIndex((x) => (x.id = id));
  if (index !== -1) {
    return allUsers.splice(index, 1);
  }
};

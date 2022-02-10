import React, { useEffect, useState } from "react";
import { Button, Table, Spinner } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../redux/actions/user.action";
import { useSelector } from "react-redux";

const UsersTable = () => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const {
    getUsersLoading,
    getUsersResponse,
    deleteUserLoading,
    deleteUserSuccess,
  } = useSelector(({ UserReducer }) => {
    return {
      getUsersLoading: UserReducer?.getUsersLoading,
      getUsersResponse: UserReducer?.getUsersResponse,
    };
  });

  useEffect(() => {
    deleteUserSuccess &&
      dispatch({ type: "DELETE_USER", payload: currUser?.id });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteUserSuccess]);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    dispatch(deleteUser(currUser?.id));
    setShowDeleteModal(false);
  };

  return (
    <>
      {getUsersLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getUsersResponse?.map((user) => (
              <tr key={user.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.username}</td>
                <td>{user?.email}</td>
                <td>{user?.address?.city}</td>
                <td>
                  <Button variant="primary me-3" size="sm">
                    {" "}
                    <i className="ri-pencil-fill"></i> Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => {
                      setShowDeleteModal(true);
                      setCurrUser(user);
                    }}>
                    <i className="ri-delete-bin-5-fill"></i> Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
          <DeleteModal
            show={showDeleteModal}
            handleClose={() => setShowDeleteModal(!showDeleteModal)}
            handleDelete={handleDelete}
            loading={deleteUserLoading}
          />
        </Table>
      )}
    </>
  );
};

export default UsersTable;

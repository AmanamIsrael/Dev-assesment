import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/user.action";
import { useSelector } from "react-redux";

const UsersTable = () => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { getUsersLoading, getUsersResponse } = useSelector(
    ({ UserReducer }) => {
      return {
        getUsersLoading: UserReducer?.getUsersLoading,
        getUsersResponse: UserReducer?.getUsersResponse,
      };
    }
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
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
                <i className="ri-more-2-fill"></i> Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => setShowDeleteModal(true)}>
                <i className="ri-delete-bin-5-fill"></i> Delete
              </Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
      <DeleteModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(!showDeleteModal)}
      />
    </Table>
  );
};

export default UsersTable;

import React, { useEffect, useState } from "react";
import { Button, Table, Spinner, Dropdown } from "react-bootstrap";
import DeleteModal from "./DeleteModal";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers, sortUsers } from "../redux/actions/user.action";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currUser, setCurrUser] = useState(null);

  const { getUsersLoading, getUsersResponse, deleteUserLoading } = useSelector(
    ({ UserReducer }) => {
      return {
        getUsersLoading: UserReducer?.getUsersLoading,
        getUsersResponse: UserReducer?.getUsersResponse,
      };
    }
  );

  useEffect(() => {
    if (!getUsersResponse) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = () => {
    dispatch(deleteUser(currUser?.id));
    setShowDeleteModal(false);
  };

  const sort = (type) => {
    dispatch(sortUsers(type, getUsersResponse));
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
              <th className="d-flex">
                Username
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary ms-2"
                    size="sm"
                    id="dropdown-basic">
                    Sort
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => sort("asc")}>
                      <i className="ri-sort-asc"></i> Sort ASC
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => sort("dsc")}>
                      <i className="ri-sort-desc"></i> Sort DSC
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </th>
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
                  <Button
                    variant="primary me-3"
                    size="sm"
                    onClick={() => navigate(`/edit/${user.id}`)}>
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

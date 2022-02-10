import React, { useEffect } from "react";
import UserForm from "./../components/UserForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserUtil } from "../helpers/utils";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getUsersResponse, editUserSuccess } = useSelector(
    ({ UserReducer }) => {
      return {
        getUsersResponse: UserReducer?.getUsersResponse,
        editUserSuccess: UserReducer?.editUserSuccess,
      };
    }
  );

  useEffect(() => {
    if (editUserSuccess) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editUserSuccess]);

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm defaultData={getUserUtil(getUsersResponse, id)} />
    </div>
  );
};

export default EditUser;

import React, { useEffect } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "../helpers/yupValidationResolver";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewUser, editUser } from "../redux/actions/user.action";
import { useNavigate } from "react-router-dom";

const UserForm = ({ defaultData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    email: Yup.string().required("please enter your email"),
    name: Yup.string().required("Please choose your name"),
    username: Yup.string().required("Please choose your username"),
    city: Yup.string().required("please enter your city"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: useYupValidationResolver(validationSchema) });

  const submitForm = (data) => {
    const newId = Math.floor(Math.random() * 100) + 11;
    const payload = { ...data, id: newId };
    dispatch(addNewUser(payload));
  };

  const editForm = (data) => {
    dispatch(editUser(data, defaultData.id));
  };

  const { addUserLoading, editUserLoading, addUserSuccess, editUserSuccess } =
    useSelector(({ UserReducer }) => {
      return {
        addUserLoading: UserReducer?.addUserLoading,
        editUserLoading: UserReducer?.editUserLoading,
        addUserSuccess: UserReducer?.addUserSuccess,
        editUserSuccess: UserReducer?.editUserSuccess,
      };
    });

  useEffect(() => {
    if (addUserSuccess || editUserSuccess) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addUserSuccess, editUserSuccess]);

  return (
    <>
      <Form
        validated={false}
        onSubmit={handleSubmit(defaultData ? editForm : submitForm)}>
        <Form.Group className="mb-3" controlId="fullName">
          <label htmlFor="fullname" className="mb-1">
            Full Name
          </label>
          <input
            className="form-control"
            id="fullname"
            type="text"
            defaultValue={defaultData?.name}
            placeholder="Enter your full name"
            {...register("name")}
          />
          <div className="feedback text-danger mt-1">
            {errors?.name?.message}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="userName">
          <label htmlFor="username" className="mb-1">
            User Name
          </label>
          <input
            className="form-control"
            id="username"
            type="text"
            defaultValue={defaultData?.username}
            placeholder="Enter your user name"
            {...register("username")}
          />
          <div className="feedback text-danger mt-1">
            {errors?.username?.message}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <label htmlFor="email" className="mb-1">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="text"
            defaultValue={defaultData?.email}
            placeholder="Enter your email"
            {...register("email")}
          />
          <div className="feedback text-danger mt-1">
            {errors?.email?.message}
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="city">
          <label htmlFor="city" className="mb-1">
            city
          </label>
          <input
            className="form-control"
            id="city"
            type="text"
            defaultValue={defaultData?.address?.city || defaultData?.city}
            placeholder="Enter your city"
            {...register("city")}
          />
          <div className="feedback text-danger mt-1">
            {errors?.city?.message}
          </div>
        </Form.Group>
        <Button variant="primary d-flex align-items-center" type="submit">
          {defaultData ? "Save Changes" : "Add user"}
          {"   "}
          {addUserLoading || editUserLoading ? (
            <Spinner animation="border" size="sm" variant="light" />
          ) : (
            ""
          )}
        </Button>
      </Form>
    </>
  );
};

export default UserForm;

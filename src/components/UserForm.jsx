import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useYupValidationResolver } from "./../helpers/yupValidationResolver";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewUser } from "../redux/actions/user.action";

const UserForm = () => {
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

  const { addUserLoading } = useSelector(({ UserReducer }) => {
    return {
      addUserLoading: UserReducer?.addUserLoading,
    };
  });

  return (
    <>
      <Form validated={false} onSubmit={handleSubmit(submitForm)}>
        <Form.Group className="mb-3" controlId="fullName">
          <label htmlFor="fullname" className="mb-1">
            Full Name
          </label>
          <input
            className="form-control"
            id="fullname"
            type="text"
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
            placeholder="Enter your city"
            {...register("city")}
          />
          <div className="feedback text-danger mt-1">
            {errors?.city?.message}
          </div>
        </Form.Group>
        <Button variant="primary d-flex align-items-center" type="submit">
          Add new user{"   "}
          {addUserLoading && (
            <Spinner animation="border" size="sm" variant="light" />
          )}
        </Button>
      </Form>
    </>
  );
};

export default UserForm;

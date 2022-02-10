import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UsersTable from "../components/UsersTable";
import { useDispatch } from "react-redux";
import { resetState } from "./../redux/actions/user.action";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Dashboard</h3>
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate("/add")}
          className="d-flex align-items-center">
          <i className="ri-add-line"></i> Add New
        </Button>
      </div>

      <UsersTable />
    </>
  );
};

export default Dashboard;

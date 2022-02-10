import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UsersTable from "../components/UsersTable";

const Dashboard = () => {
  const navigate = useNavigate();
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

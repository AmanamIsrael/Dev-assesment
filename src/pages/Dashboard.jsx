import React from "react";
import { Button } from "react-bootstrap";
import UsersTable from "../components/UsersTable";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Dashboard</h3>
        <Button
          variant="primary"
          size="sm"
          className="d-flex align-items-center">
          <i className="ri-add-line"></i> Add User
        </Button>
      </div>

      <UsersTable />
    </>
  );
};

export default Dashboard;

import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="container my-3">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit" element={<EditUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

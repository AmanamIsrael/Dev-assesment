import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <div>
      page not found <br />
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default notFound;

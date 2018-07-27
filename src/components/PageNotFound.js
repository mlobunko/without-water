import React from "react";
import { Alert } from "reactstrap";

export const PageNotFound = ({ textError }) => (
  <div className="container-vertical-60vh">
    <Alert color="danger">{textError}</Alert>
  </div>
);

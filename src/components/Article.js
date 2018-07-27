import React from "react";
import { Jumbotron } from "reactstrap";

export const Article = ({ title, text }) => (
  <Jumbotron className="container-max-width__article news-jambotron">
    <h3>{title}</h3>
    <p>{text}</p>
  </Jumbotron>
);

import React from "react";
import { Article } from "./Article";

export const Articles = ({ news }) => {
  return news.map(({ id, title, text }) => {
    return <Article key={id} title={title} text={text} />;
  });
};

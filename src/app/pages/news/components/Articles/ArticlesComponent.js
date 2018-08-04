import React from 'react';
import { Jumbotron } from 'reactstrap';
import CounterNews from './CounterNewsComponent';

export const ArticlesComponent = ({ news }) => (
  <React.Fragment>
    <div className="container-max-width container-articles">
      {news.map(({ title, text }) => (
        <Jumbotron
          className="container-max-width__article news-jambotron"
          key={title}
        >
          <h3>{title}</h3>
          <p>{text}</p>
        </Jumbotron>
      ))}
    </div>
    <CounterNews total={news.length} />
  </React.Fragment>
);

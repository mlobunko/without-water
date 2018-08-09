import React from 'react';
import CounterNews from './CounterNews';
import { StyledJumbotron } from './styles';
import { StyledArticlesSection, StyledHeader } from './styles';

export const ArticlesComponent = ({ news }) => (
  <React.Fragment>
    <StyledArticlesSection>
      {news.map(({ title, text }) => (
        <StyledJumbotron key={title}>
          <StyledHeader>{title}</StyledHeader>
          <p>{text}</p>
        </StyledJumbotron>
      ))}
    </StyledArticlesSection>
    <CounterNews total={news.length} />
  </React.Fragment>
);

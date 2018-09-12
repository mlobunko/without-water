import React from 'react';
import PropTypes from 'prop-types';

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
ArticlesComponent.displayName = 'ArticlesComponent';

export default ArticlesComponent;

ArticlesComponent.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

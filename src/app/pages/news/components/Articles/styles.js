import styled from 'styled-components';
import { Jumbotron } from 'reactstrap';

export const StyledArticlesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
`;
StyledArticlesSection.displayName = 'StyledArticlesSection';

export const StyledCounterNews = styled.div`
  text-align: center;
`;
StyledCounterNews.displayName = 'StyledCounterNews';

export const StyledJumbotron = styled(Jumbotron)`
  max-width: 700px;
  && {
    background-color: rgb(250, 250, 250);
  }
`;
StyledJumbotron.displayName = 'StyledJumbotron';

export const StyledHeader = styled.h3`
  margin-bottom: 2rem;
`;
StyledHeader.displayName = 'StyledHeader';

import styled from 'styled-components';

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  height: calc(100vh - 200px);
  overflow: auto;

  @media screen and (max-width: 768px) {
    overflow: unset;
  }
`;

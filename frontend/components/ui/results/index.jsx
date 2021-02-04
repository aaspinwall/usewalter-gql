import styled from "styled-components";

export const Results = styled.div`
  display: grid;
  grid-template-columns: 60% 1fr 60px;
  @media only screen and (min-width: 62em) {
    grid-template-columns: 50% 1fr 60px;
  }
  > * {
    width: 100%;
    align-self: center;
  }
`;

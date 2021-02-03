import React from "react";
import GetData from "../../utilities/getData";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Security = () => {
  return (
    <Wrapper>
      <header>Security </header>
      <button>See all packages</button>
      <button>new delivery</button>
      <GetData />
    </Wrapper>
  );
};

export default Security;

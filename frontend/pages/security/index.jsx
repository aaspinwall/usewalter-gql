import React, { useState } from "react";
import GetData from "../../utilities/getData";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Security = () => {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <Wrapper>
      <header>Security Panel</header>
      <section>
        <p>Add instructions</p>
        <div className='full'>
          <button onClick={() => setSeeAll(!seeAll)}>
            {!seeAll ? "Show" : "Hide"} all packages
          </button>
          <button>New delivery</button>
        </div>
        {seeAll ? <GetData /> : null}
      </section>
    </Wrapper>
  );
};

export default Security;

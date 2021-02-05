import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styled from 'styled-components';

const Wrapper = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  #spinner {
    animation: spin 2s infinite linear;
  }
`;

const Loading = () => {
  return (
    <Wrapper className="center">
      <div>please wait while we fetch your results...</div>
      <AiOutlineLoading3Quarters id="spinner" />
    </Wrapper>
  );
};

export default Loading;

import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
  return (
    <div>
      <div>please wait while we fetch your results...</div>
      <AiOutlineLoading3Quarters />
    </div>
  );
};

export default Loading;

import React from 'react';
import { Circle } from './elements';

const IconCircle = ({ icon, size = 'small' }) => {
  const iconSize = {
    small: '6rem',
    large: '10rem',
  };

  const selectedSize = iconSize[size];
  return (
    <Circle size={selectedSize}>
      <img src={icon} />
    </Circle>
  );
};

export default IconCircle;

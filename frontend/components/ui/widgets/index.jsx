import React, { useEffect } from 'react';
import { AiFillCheckCircle, AiFillClockCircle } from 'react-icons/ai';

export const Delivered = ({ delivered }) => {
  if (!delivered) {
    return <AiFillClockCircle color="grey" />;
  } else {
    return <AiFillCheckCircle color="green" />;
  }
};

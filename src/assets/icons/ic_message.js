import Svg, {Path} from 'react-native-svg';
import React from 'react';

const IconMessage = ({active}) => {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 0H2C0.9 0 0 0.9 0 2V20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM4 14L2 16V2H18V14H4ZM7 7H5V9H7V7ZM9 7H11V9H9V7ZM15 7H13V9H15V7Z"
        fill={active ? '#0BCAD4' : '#495A75'}
      />
    </Svg>
  );
};

export default IconMessage;

import Svg, {Path} from 'react-native-svg';
import React from 'react';

const IconHospital = ({active}) => {
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
        d="M19.2667 0.0333328L19.4444 0C19.7556 0 20 0.244444 20 0.555555V17.3556C20 17.6111 19.8333 17.8111 19.6 17.8889L13.3333 20L6.66667 17.6667L0.733333 19.9667L0.555556 20C0.244444 20 0 19.7556 0 19.4444V2.64444C0 2.38889 0.166667 2.18889 0.4 2.11111L6.66667 0L13.3333 2.33333L19.2667 0.0333328ZM12.2222 4.3L7.77777 2.74445V15.7L12.2222 17.2556V4.3ZM2.22223 3.84445L5.55556 2.72223V15.7222L2.22223 17.0111V3.84445ZM14.4445 17.2778L17.7778 16.1556V3L14.4445 4.28889V17.2778Z"
        fill={active ? '#0BCAD4' : '#495A75'}
      />
    </Svg>
  );
};

export default IconHospital;

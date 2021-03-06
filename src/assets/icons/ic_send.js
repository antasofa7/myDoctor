import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {colors} from '../../utils';

const IconSend = ({disabled}) => {
  return (
    <Svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.67084 22.217L3.17899 16.8482L25.0433 10.2505L14.7492 30.637L10.242 25.2811L20.4471 14.1072L7.67084 22.217ZM6.65872 17.8838L14.4815 15.5231L8.07805 19.5908L6.65872 17.8838ZM18.0092 19.7428L14.3259 27.0368L12.899 25.3361L18.0092 19.7428Z"
        fill={disabled ? colors.button.disabled.text : colors.white}
      />
    </Svg>
  );
};

export default IconSend;

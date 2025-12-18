import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SmartTrackerIcon = ({ size = 20, color = '#1a73e8' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17 13H7V11H17V13Z"
      fill={color}
    />
  </Svg>
);

export default SmartTrackerIcon; 
import React from 'react';
import PropTypes from 'prop-types';

function ServedIcon({ width = 26, height = 26, fill = '#333' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" version="1.1" width={width} height={height}>
      <g id="surface1">
        <path fill={fill} d="M 5 1 C 2.789063 1 1 2.789063 1 5 C 1 7.210938 2.789063 9 5 9 C 7.210938 9 9 7.210938 9 5 C 9 2.789063 7.210938 1 5 1 Z M 20 3 C 19.449219 3 19 3.449219 19 4 C 19 4.550781 19.449219 5 20 5 C 20.550781 5 21 4.550781 21 4 C 21 3.449219 20.550781 3 20 3 Z M 20 5 C 17.539063 5 15.542969 6.6875 15.09375 9 L 14.5 9 C 14.199219 9 14 9.199219 14 9.5 L 14 10.5 C 14 10.800781 14.199219 11 14.5 11 L 25.5 11 C 25.800781 11 26 10.800781 26 10.5 L 26 9.5 C 26 9.199219 25.800781 9 25.5 9 L 24.90625 9 C 24.457031 6.6875 22.460938 5 20 5 Z M 2.1875 10 C 1.988281 10 0.898438 9.988281 0 10.1875 L 0 25 L 11 25 L 11 16.1875 L 13.1875 18.90625 C 13.488281 19.207031 13.914063 19.40625 14.3125 19.40625 C 14.710938 19.40625 15.105469 19.207031 15.40625 18.90625 L 18.90625 14.1875 C 19.507813 13.585938 23 13.09375 23 12.09375 L 17 12.09375 L 17 12 L 14.40625 15.5 L 11 10.5 C 10.5 10 8.113281 10 7.8125 10 L 5 21 Z " />
      </g>
    </svg>
  );
}

ServedIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default ServedIcon;

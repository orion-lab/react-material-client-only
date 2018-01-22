import React from 'react';
import PropTypes from 'prop-types';

function CookingIcon({ width = 26, height = 26, fill = '#333' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" version="1.1" width={width} height={height}>
      <g id="surface1">
        <path fill={fill} d="M 12.46875 1.96875 L 10.46875 2.21875 C 9.386719 2.363281 8.605469 3.386719 8.75 4.46875 L 8.84375 5.15625 L 5.84375 5.5625 C 4.875 5.691406 4.503906 6.183594 4.03125 6.8125 C 3.558594 7.441406 3.179688 7.929688 2.1875 8.0625 C 1.636719 8.140625 1.25 8.652344 1.328125 9.203125 C 1.40625 9.753906 1.917969 10.140625 2.46875 10.0625 L 22.28125 7.40625 C 22.667969 7.40625 23.019531 7.183594 23.183594 6.832031 C 23.351563 6.480469 23.296875 6.066406 23.050781 5.769531 C 22.804688 5.46875 22.40625 5.339844 22.03125 5.4375 C 21.039063 5.570313 20.558594 5.203125 19.9375 4.71875 C 19.316406 4.234375 18.8125 3.839844 17.84375 3.96875 L 14.8125 4.375 L 14.71875 3.6875 C 14.574219 2.605469 13.550781 1.824219 12.46875 1.96875 Z M 12.71875 3.9375 L 12.8125 4.625 L 10.84375 4.90625 L 10.75 4.21875 Z M 2.8125 11 C 2.261719 11.050781 1.855469 11.542969 1.90625 12.09375 C 1.957031 12.644531 2.449219 13.050781 3 13 L 3 15.84375 C 2.710938 15.71875 2.503906 15.523438 2.34375 15.34375 C 2.042969 15.007813 1.96875 14.71875 1.96875 14.71875 C 1.832031 14.199219 1.304688 13.882813 0.78125 14 C 0.503906 14.058594 0.265625 14.230469 0.121094 14.472656 C -0.0195313 14.71875 -0.0546875 15.011719 0.03125 15.28125 C 0.03125 15.28125 0.246094 15.992188 0.84375 16.65625 C 1.296875 17.160156 2.03125 17.65625 3 17.875 L 3 24 C 3 25.105469 3.894531 26 5 26 L 21 26 C 22.105469 26 23 25.105469 23 24 L 23 17.875 C 23.96875 17.65625 24.703125 17.160156 25.15625 16.65625 C 25.753906 15.992188 25.96875 15.28125 25.96875 15.28125 C 26.082031 14.9375 25.996094 14.558594 25.75 14.292969 C 25.503906 14.027344 25.132813 13.914063 24.78125 14 C 24.417969 14.082031 24.128906 14.359375 24.03125 14.71875 C 24.03125 14.71875 23.957031 15.007813 23.65625 15.34375 C 23.496094 15.523438 23.289063 15.71875 23 15.84375 L 23 13 C 23.359375 13.003906 23.695313 12.816406 23.878906 12.503906 C 24.058594 12.191406 24.058594 11.808594 23.878906 11.496094 C 23.695313 11.183594 23.359375 10.996094 23 11 L 3 11 C 2.96875 11 2.9375 11 2.90625 11 C 2.875 11 2.84375 11 2.8125 11 Z " />
      </g>
    </svg>
  );
}

CookingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default CookingIcon;

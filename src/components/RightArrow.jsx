import React from 'react';
import PropTypes from 'prop-types';

const RightArrow = ({ size = 24, color = 'black', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2l10 10-10 10-1.41-1.41L18.17 12l-7.58-7.59L12 2z" />
  </svg>
);

RightArrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default RightArrow;

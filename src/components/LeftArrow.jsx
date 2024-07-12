import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ size = 24, color = 'black', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 2L2 12l10 10 1.41-1.41L5.83 12l7.58-7.59L12 2z" />
  </svg>
);

LeftArrow.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default LeftArrow;


import React from 'react';

const CloseButton = ({...props }) => (
  <svg
    focusable="false" viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path  d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" />
  </svg>
);


export default CloseButton;
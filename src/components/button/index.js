import React from 'react';

function Button({ children, onClickHandler, className }) {
  return (
    <button aria-label="panel-button" className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClickHandler, className }) {
  return (
    <button aria-label="panel-button" className={className} onClick={onClickHandler}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;

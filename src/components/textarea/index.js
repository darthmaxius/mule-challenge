import React from 'react';
import PropTypes from 'prop-types';

function Textarea({ className, handlerTextarea }) {
  function setValueInHandler(e) {
    handlerTextarea(e.target.value);
  }

  return <textarea aria-label="panel-textarea" className={className} onChange={setValueInHandler} />;
}

Textarea.propTypes = {
  class: PropTypes.string,
  handlerTextarea: PropTypes.func.isRequired,
};

export default Textarea;

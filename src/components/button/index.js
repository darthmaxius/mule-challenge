import React, { useState } from 'react';
import formatString2Elements from '../../helpers/formatString2Elements';

function Button({ children, setElementsHandler, textAreaValue, className, setResumeHandler }) {
  const [counter, setCounter] = useState(0);

  function insertText(e) {
    const uniqueElements = [];
    setElementsHandler([]);

    const text = textAreaValue.trim();
    const resume = [];

    const lines = text.toUpperCase().split('\n');

    const elements = [];

    lines.map((line) => {
      const auxInputOutputs = line.split('DEPENDS');

      if (auxInputOutputs.length !== 2) {
        resume.push({
          text: line,
          validated: 'INVALID FORMAT',
        });
        return console.log(`THIS LINE ONLY HAVE ONE DEPENDS`);
      }

      const auxInput = auxInputOutputs[0].trim().split(' ');
      const auxOutputs = auxInputOutputs[1].trim().split(' ');

      console.log('INPUTS: ', auxInput, auxOutputs);

      if (auxInput.length > 1 || auxOutputs.length < 1 || auxOutputs[0] === '') {
        resume.push({
          text: line,
          validated: 'INVALID LINE TO DRAW',
        });
        return console.log(`INVALID FORMAT LINE TO DRAW "${line}"`);
      }

      console.log(`VALID STRING "${text}"`);
      elements.push(...formatString2Elements(auxInput[0], auxOutputs, uniqueElements, counter, setCounter));

      resume.push({
        text: line,
        validated: 'OK',
      });
    });

    setElementsHandler(elements);
    setResumeHandler(resume);

    return console.log('DRAW WITH VALUES: ', elements, uniqueElements);
  }

  return (
    <button className={className} onClick={insertText}>
      {children}
    </button>
  );
}

export default Button;

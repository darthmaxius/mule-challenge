import React, { useState } from 'react';

function Button({ children, setElementsHandler, textAreaValue, className, setResumeHandler }) {
  const [counter, setCounter] = useState(0);

  function formatString2Elements(input, outputs, uniqueElements) {
    const newElements = [];

    if (uniqueElements.indexOf(input) === -1) {
      uniqueElements.push(input);

      newElements.push({
        id: `${counter}.e-${input}`,
        data: { label: input },
        position: { x: 250, y: 25 },
      });
    }

    outputs.map((output, key) => {
      const position = key * 10;
      const positionX = 100 + position;
      const positionY = 125 + position;

      if (uniqueElements.indexOf(output) === -1) {
        uniqueElements.push(output);

        newElements.push({
          id: `${counter}.e-${output}`,
          // you can also pass a React component as a label
          data: { label: output },
          position: { x: positionX, y: positionY },
        });
      }

      newElements.push({
        id: `${counter}.e-${input}-e-${output}`,
        source: `${counter}.e-${input}`,
        target: `${counter}.e-${output}`,
        arrowHeadType: 'arrowclosed',
        type: 'step',
      });
    });

    setCounter(counter + 1);

    return newElements;
  }

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
      elements.push(...formatString2Elements(auxInput[0], auxOutputs, uniqueElements));

      resume.push({
        text: line,
        validated: 'OK',
      });
    });

    console.log('DIBUJO CON VALORES: ', elements, uniqueElements);

    setElementsHandler(elements);
    setResumeHandler(resume);
  }

  return (
    <button className={className} onClick={insertText}>
      {children}
    </button>
  );
}

export default Button;
